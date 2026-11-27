(() => {
  const deck = document.getElementById('flashcards');
  if (!deck) return;
  const sources = [...deck.querySelectorAll('[data-chapter-deck]')];
  const status = document.getElementById('deckStatus');
  const controls = document.getElementById('deckControls');
  const question = document.getElementById('cardQuestion');
  const answer = document.getElementById('cardAnswer');
  const position = document.getElementById('cardPosition');
  const announcement = document.getElementById('cardAnnouncement');
  const reveal = document.getElementById('revealCard');
  const prev = document.getElementById('prevCard');
  const next = document.getElementById('nextCard');
  const jump = document.getElementById('cardNumber');
  const shuffle = document.getElementById('shuffleDeck');
  let cards = [];
  let order = [];
  let index = 0;
  let shuffled = false;

  function setAnswer(visible) {
    answer.hidden = !visible;
    reveal.textContent = visible ? 'Hide answer' : 'Show answer';
    reveal.setAttribute('aria-expanded', String(visible));
  }

  function showCard() {
    const { front, back, chapter } = cards[order[index]];
    const label = 'Card ' + (index + 1) + ' of ' + cards.length + (chapter ? ' · Chapter ' + chapter : '');
    position.textContent = label;
    question.textContent = front;
    answer.textContent = back;
    jump.value = index + 1;
    setAnswer(false);
    prev.disabled = index === 0;
    next.disabled = index === cards.length - 1;
    announcement.textContent = label + '. ' + front;
  }

  reveal.addEventListener('click', () => setAnswer(answer.hidden));
  prev.addEventListener('click', () => { index--; showCard(); });
  next.addEventListener('click', () => { index++; showCard(); });
  jump.addEventListener('change', () => {
    const target = jump.valueAsNumber;
    if (Number.isInteger(target)) index = Math.min(Math.max(target - 1, 0), cards.length - 1);
    showCard();
  });
  shuffle.addEventListener('click', () => {
    shuffled = !shuffled;
    order = cards.map((_, item) => item);
    if (shuffled) {
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
    }
    shuffle.setAttribute('aria-pressed', String(shuffled));
    index = 0;
    showCard();
  });

  async function loadDeck(link) {
    const response = await fetch(link.href);
    if (!response.ok) throw new Error('Flashcards unavailable');
    const chapter = link.dataset.chapterNumber;
    const entries = (await response.text()).replace(/^\uFEFF/, '').split(/\r?\n/)
      .map((line) => line.split('\t'))
      .filter(([front, back]) => front?.trim() && back?.trim())
      .map(([front, back]) => ({ front, back, chapter }));
    if (!entries.length) throw new Error('Empty deck');
    return entries;
  }

  const download = document.getElementById('downloadModuleDeck');
  status.textContent = 'Loading flashcards…';
  Promise.all(sources.map(loadDeck)).then((decks) => {
    cards = decks.flat();
    if (!cards.length) throw new Error('Empty deck');
    order = cards.map((_, item) => item);
    jump.max = cards.length;
    if (download) {
      const tsv = cards.map(({ front, back }) => front + '\t' + back).join('\n') + '\n';
      download.href = URL.createObjectURL(new Blob([tsv], { type: 'text/tab-separated-values;charset=utf-8' }));
      download.hidden = false;
    }
    status.textContent = '';
    controls.hidden = false;
    showCard();
  }).catch(() => {
    status.textContent = download
      ? 'The module deck could not load. Chapter downloads are available below.'
      : 'The interactive deck could not load. You can still download the TSV.';
  });
})();
