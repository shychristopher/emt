(() => {
  const speech = window.speechSynthesis;
  const prose = document.getElementById('readingText');
  const button = document.getElementById('listenButton');
  if (!speech || !window.SpeechSynthesisUtterance || !prose || !button) return;

  const player = document.getElementById('listenPlayer');
  const close = document.getElementById('listenClose');
  const play = document.getElementById('listenPlay');
  const stop = document.getElementById('listenStop');
  const status = document.getElementById('listenStatus');
  const rate = document.getElementById('listenRate');
  const voice = document.getElementById('listenVoice');
  const voiceLabel = document.getElementById('listenVoiceLabel');
  const language = document.documentElement.lang || 'en';
  const highlights = window.Highlight && window.CSS?.highlights;
  const segmenter = window.Intl?.Segmenter;
  const sentenceSegmenter = segmenter && new segmenter(language, { granularity: 'sentence' });
  const wordSegmenter = segmenter && new segmenter(language, { granularity: 'word' });
  const blockSelector = 'h1,h2,h3,h4,h5,h6,p,li,dt,dd,td,th,blockquote,figcaption,div';
  const ignored = '[hidden], [aria-hidden="true"], pre, svg, script, style, .concept-map, .callout-label, annotation';
  const voiceKey = 'emt-listen-voice';
  const contentLanguage = language.toLowerCase().split('-')[0];
  const deviceLanguage = navigator.language.toLowerCase();
  let voices = [];
  let recommendedVoice;
  let preferredVoice = '';
  try { preferredVoice = localStorage.getItem(voiceKey) || ''; } catch (error) {}
  let units = [];
  let textLocations;
  let unitIndex = 0;
  let offset = 0;
  let utterance = null;
  let state = 'idle';

  function voiceRank(item) {
    const label = `${item.name} ${item.voiceURI}`;
    const locale = item.lang.toLowerCase();
    let rank = 0;
    if (locale.split('-')[0] === contentLanguage) rank += 100;
    if (/\b(?:natural|neural|premium)\b/i.test(label)) rank += 20;
    else if (/\benhanced\b/i.test(label)) rank += 10;
    if (/\bnovelty\b/i.test(label)) rank -= 30;
    if (locale === deviceLanguage) rank += 2;
    if (item.default) rank++;
    return rank;
  }

  function updateVoices() {
    voices = speech.getVoices().filter((item) => item.localService)
      .sort((a, b) => voiceRank(b) - voiceRank(a) || a.name.localeCompare(b.name));
    recommendedVoice = voices.find((item) => item.lang.toLowerCase().split('-')[0] === contentLanguage);
    voice.replaceChildren(new Option(recommendedVoice ? `Auto · ${recommendedVoice.name}` : 'Device default', ''));
    for (const item of voices) voice.add(new Option(`${item.name} (${item.lang})`, item.voiceURI));
    if (voices.some((item) => item.voiceURI === preferredVoice)) voice.value = preferredVoice;
    voiceLabel.hidden = voices.length === 0;
  }

  function setState(next, message = '') {
    state = next;
    play.textContent = next === 'playing' ? 'Pause' : next === 'paused' ? 'Resume' : 'Play';
    stop.disabled = next === 'idle';
    prose.classList.toggle('is-listening', next !== 'idle');
    status.textContent = message;
  }

  function clearHighlight() {
    highlights?.delete('emt-reading-word');
    highlights?.delete('emt-reading-sentence');
  }

  function cancel() {
    const previous = utterance;
    utterance = null;
    if (previous) speech.cancel();
  }

  function reset(message = '') {
    cancel();
    clearHighlight();
    unitIndex = 0;
    offset = 0;
    setState('idle', message);
  }

  function wordsIn(text) {
    if (wordSegmenter) {
      return [...wordSegmenter.segment(text)].filter((part) => part.isWordLike)
        .map(({ index, segment }) => ({ start: index, end: index + segment.length }));
    }
    return [...text.matchAll(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)]
      .map(({ index, 0: word }) => ({ start: index, end: index + word.length }));
  }

  function collectText() {
    const walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement.closest(ignored) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const blocks = [];
    textLocations = new WeakMap();
    for (let node = walker.nextNode(); node; node = walker.nextNode()) {
      const element = node.parentElement.closest(blockSelector);
      let block = blocks.at(-1);
      if (!block || block.element !== element) {
        if (!node.data.trim()) continue;
        block = { element, text: '', pieces: [] };
        blocks.push(block);
      }
      const piece = { node, start: block.text.length };
      textLocations.set(node, { block, start: piece.start });
      block.pieces.push(piece);
      block.text += node.data;
    }

    units = blocks.flatMap((block) => {
      const sentences = sentenceSegmenter ? [...sentenceSegmenter.segment(block.text)] : [{ index: 0, segment: block.text }];
      return sentences.flatMap(({ index, segment }) => {
        // Keep individual utterances short for device engines that stop on long text.
        const chunks = segment.matchAll(/\S.{0,279}(?=\s|$)|\S{1,280}/gs);
        return [...chunks].map((match) => {
          const text = match[0].trimEnd();
          return { block, start: index + match.index, text, words: wordsIn(text) };
        });
      });
    });
  }

  function point(block, position, atEnd = false) {
    const piece = block.pieces.find(({ node, start }) =>
      atEnd ? start + node.length >= position : start + node.length > position);
    return [piece.node, position - piece.start];
  }

  function mark(unit, from, to, word) {
    clearHighlight();
    const range = new Range();
    range.setStart(...point(unit.block, unit.start + from));
    range.setEnd(...point(unit.block, unit.start + to, true));
    if (highlights) highlights.set(word ? 'emt-reading-word' : 'emt-reading-sentence', new Highlight(range));
    const rect = range.getClientRects()[0];
    if (!rect) return;
    const panelTop = player.getBoundingClientRect().top;
    if (rect.top < 20 || rect.bottom > panelTop - 20) {
      window.scrollBy(0, rect.top - Math.max(28, panelTop * 0.3));
    }
    const table = range.startContainer.parentElement.closest('.table-wrap');
    if (table) {
      const box = table.getBoundingClientRect();
      if (rect.left < box.left || rect.right > box.right) table.scrollBy(rect.left - box.left - 16, 0);
    }
  }

  function speak() {
    const unit = units[unitIndex];
    if (!unit) {
      reset('Finished reading.');
      return;
    }
    const start = offset;
    const next = new SpeechSynthesisUtterance(unit.text.slice(start));
    const selected = voices.find((item) => item.voiceURI === voice.value) || recommendedVoice;
    if (selected) next.voice = selected;
    next.lang = selected?.lang || language;
    next.rate = Number(rate.value);
    next.onstart = () => {
      if (utterance !== next) return;
      status.textContent = '';
      mark(unit, start, unit.text.length, false);
    };
    next.onboundary = (event) => {
      if (utterance !== next || (event.name && event.name !== 'word')) return;
      const word = unit.words.find(({ end }) => end > start + event.charIndex);
      if (!word) return;
      offset = Math.max(start, word.start);
      mark(unit, offset, word.end, true);
    };
    next.onend = () => {
      if (utterance !== next) return;
      unitIndex++;
      offset = 0;
      speak();
    };
    next.onerror = () => {
      if (utterance === next) reset('The browser could not read aloud. Try another device voice if available.');
    };
    utterance = next;
    speech.speak(next);
  }

  function showPlayer(open) {
    player.hidden = !open;
    button.setAttribute('aria-expanded', String(open));
    if (open) {
      for (const menu of button.parentElement.querySelectorAll('details[open]')) menu.open = false;
    } else {
      reset();
    }
  }

  for (const menu of button.parentElement.querySelectorAll('.study-detail')) {
    menu.addEventListener('toggle', () => {
      if (menu.open && !player.hidden) showPlayer(false);
    });
  }
  button.addEventListener('click', () => showPlayer(player.hidden));
  close.addEventListener('click', () => {
    showPlayer(false);
    button.focus();
  });
  play.addEventListener('click', () => {
    if (state === 'playing') {
      cancel();
      setState('paused', 'Paused.');
      return;
    }
    if (state === 'idle') {
      if (prose.hidden) document.getElementById('mindmapViewToggle')?.click();
      collectText();
    }
    setState('playing', 'Starting…');
    speak();
  });
  stop.addEventListener('click', () => reset());
  voice.addEventListener('change', () => {
    preferredVoice = voice.value;
    try { localStorage.setItem(voiceKey, preferredVoice); } catch (error) {}
  });
  for (const control of [voice, rate]) {
    control.addEventListener('change', () => {
      if (state !== 'playing') return;
      cancel();
      speak();
    });
  }

  prose.addEventListener('click', (event) => {
    if (state === 'idle' || event.target.closest('a, button, input, summary') || !window.getSelection().isCollapsed) return;
    const caret = document.caretPositionFromPoint?.(event.clientX, event.clientY);
    const range = caret ? null : document.caretRangeFromPoint?.(event.clientX, event.clientY);
    const node = caret?.offsetNode || range?.startContainer;
    const at = caret?.offset ?? range?.startOffset;
    const location = textLocations.get(node);
    if (!location) return;
    const position = location.start + at;
    const index = units.findIndex((unit) =>
      unit.block === location.block && position < unit.start + unit.text.length);
    if (index < 0) return;
    cancel();
    unitIndex = index;
    const unit = units[index];
    offset = unit.words.find((word) => word.end > position - unit.start)?.start ?? 0;
    setState('playing', 'Starting…');
    speak();
  });

  function resetForContentChange() {
    if (state !== 'idle') reset('Content changed. Press Play to read the updated text.');
  }
  document.getElementById('alsPreference')?.addEventListener('change', resetForContentChange);
  document.getElementById('termSearchInput')?.addEventListener('input', resetForContentChange);
  new MutationObserver(() => {
    if (prose.hidden && state !== 'idle') reset();
  }).observe(prose, { attributes: true, attributeFilter: ['hidden'] });
  window.addEventListener('pagehide', () => reset());
  speech.addEventListener('voiceschanged', updateVoices);
  updateVoices();
  button.hidden = false;
})();
