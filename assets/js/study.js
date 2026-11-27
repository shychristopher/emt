(() => {
  const root = document.documentElement;
  const theme = document.getElementById('themeToggle');
  theme.hidden = false;
  theme.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  theme.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    theme.setAttribute('aria-pressed', String(next === 'dark'));
    try { localStorage.setItem('emt-theme', next); } catch (error) {}
  });

  const sidebar = document.getElementById('sidebar');
  const menu = document.getElementById('navToggle');
  const mobile = matchMedia('(max-width: 760px)');
  root.classList.add('js');
  menu.hidden = false;
  function closeMenu() {
    sidebar.classList.remove('is-open');
    menu.setAttribute('aria-expanded', 'false');
  }
  menu.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('is-open');
    menu.setAttribute('aria-expanded', String(isOpen));
    if (isOpen) sidebar.querySelector('[aria-current]')?.focus();
  });
  mobile.addEventListener('change', closeMenu);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && sidebar.classList.contains('is-open')) {
      closeMenu();
      menu.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !menu.contains(event.target)) closeMenu();
  });

  const disclaimer = document.getElementById('disclaimerDialog');
  const ack = document.getElementById('disclaimerAckCheck');
  const remember = document.getElementById('disclaimerRememberCheck');
  const accept = document.getElementById('disclaimerAcceptBtn');
  const disclaimerKey = 'emt-disclaimer-ack-v1';
  let acknowledged = false;
  try {
    acknowledged = localStorage.getItem(disclaimerKey) === '1' || sessionStorage.getItem(disclaimerKey) === '1';
  } catch (error) {}
  if (!acknowledged && typeof disclaimer.showModal === 'function') {
    disclaimer.showModal();
    disclaimer.addEventListener('cancel', (event) => event.preventDefault());
    ack.addEventListener('change', () => { accept.disabled = !ack.checked; });
    disclaimer.querySelector('form').addEventListener('submit', () => {
      try { (remember.checked ? localStorage : sessionStorage).setItem(disclaimerKey, '1'); } catch (error) {}
    });
  }

  function enableTermSearch(prose, search, result) {
    const sections = [...prose.querySelectorAll('.glossary-group')];
    const containers = sections.length ? sections : [prose];
    const groups = containers.map((container) => ({
      container,
      entries: [...container.querySelectorAll(':scope > ul > li, :scope > ol > li, tbody tr')]
        .map((entry) => [entry, entry.textContent.toLowerCase()])
    }));
    const filter = () => {
      const query = search.value.trim().toLowerCase();
      let count = 0;
      for (const { container, entries } of groups) {
        let matches = 0;
        for (const [entry, text] of entries) {
          entry.hidden = !text.includes(query);
          if (!entry.hidden) matches++;
        }
        if (container !== prose) container.hidden = matches === 0;
        count += matches;
      }
      result.textContent = count + (count === 1 ? ' term' : ' terms');
    };
    search.addEventListener('input', filter);
    filter();
  }

  const practiceTerms = document.getElementById('practiceTerms');
  if (practiceTerms) {
    const panel = practiceTerms.closest('details');
    const link = document.getElementById('practiceGlossaryLink');
    const search = document.getElementById('practiceSearchInput');
    const status = document.getElementById('practiceStatus');
    const results = document.getElementById('practiceResults');
    let requested = false;
    panel.addEventListener('toggle', async () => {
      if (!panel.open || requested) return;
      requested = true;
      practiceTerms.hidden = false;
      status.textContent = 'Loading key terms…';
      try {
        const currentGlossary = link.getAttribute('aria-current') === 'page'
          ? document.getElementById('readingText') : null;
        let glossary = currentGlossary;
        if (!glossary) {
          const response = await fetch(link.href);
          if (!response.ok) throw new Error('Glossary unavailable');
          glossary = new DOMParser().parseFromString(await response.text(), 'text/html')
            .getElementById('readingText');
        }
        if (!glossary) throw new Error('Glossary unavailable');
        results.replaceChildren(...Array.from(glossary.childNodes, (node) => node.cloneNode(true)));
        enableTermSearch(results, search, status);
        search.disabled = false;
      } catch (error) {
        requested = false;
        status.textContent = 'Quick lookup could not load. Open the full glossary above.';
      }
    });
  }

  const inlineToggle = document.getElementById('alsPreference');
  let alsEnabled = false;
  try { alsEnabled = localStorage.getItem('emt-als-connections') === 'on'; } catch (error) {}
  function saveAlsPreference(enabled) {
    alsEnabled = enabled;
    try { localStorage.setItem('emt-als-connections', enabled ? 'on' : 'off'); } catch (error) {}
  }

  const prose = document.getElementById('readingText');
  if (!prose) return;

  for (const table of prose.querySelectorAll('table')) {
    const scroll = document.createElement('div');
    scroll.className = 'table-wrap';
    scroll.tabIndex = 0;
    scroll.setAttribute('role', 'region');
    scroll.setAttribute('aria-label', table.caption?.textContent.trim() || 'Scrollable table');
    table.before(scroll);
    scroll.append(table);
  }

  const alsLabel = /^(?:(?:NOTE|TIP|IMPORTANT|WARNING|CAUTION)\s*[—–-]\s*)?ALS Connections?\b/i;
  const headingPattern = /^H[1-6]$/;
  const supplemental = new Set();

  for (const quote of prose.querySelectorAll('blockquote')) {
    const paragraph = quote.firstElementChild;
    const text = paragraph?.firstChild;
    const marker = text?.nodeType === Node.TEXT_NODE
      ? text.nodeValue.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/)
      : null;
    const als = alsLabel.test(quote.querySelector('strong')?.textContent.trim() || '');
    if (als) supplemental.add(quote);
    if (marker) {
      text.nodeValue = text.nodeValue.slice(marker[0].length);
      quote.dataset.callout = marker[1].toLowerCase();
      if (als) quote.classList.add('als-callout');
      const label = document.createElement('span');
      label.className = 'callout-label';
      label.textContent = marker[1];
      if (!als) quote.prepend(label);
    } else if (als) {
      quote.classList.add('als-callout');
    }
  }

  if (inlineToggle) {
    let sectionLevel = 0;
    for (const element of prose.children) {
      const level = headingPattern.test(element.tagName) ? Number(element.tagName[1]) : 0;
      if (level && level <= sectionLevel) sectionLevel = 0;
      if (level && alsLabel.test(element.textContent.trim())) {
        sectionLevel = level;
        element.classList.add('als-heading');
      }
      if (sectionLevel) supplemental.add(element);
      if (element.matches('p') && element.firstElementChild?.matches('strong') &&
          alsLabel.test(element.textContent.trim())) {
        supplemental.add(element);
        element.classList.add('als-inline');
      }
    }

    for (const item of prose.querySelectorAll('li')) {
      const label = [...item.childNodes].find((node) => node.textContent.trim());
      if (label?.nodeType === Node.ELEMENT_NODE && label.matches('ul, ol')) continue;
      if (alsLabel.test(label?.textContent.trim() || '')) supplemental.add(item);
    }

    function displayAlsContent() {
      for (const element of supplemental) element.hidden = !alsEnabled;
      inlineToggle.dataset.state = alsEnabled ? 'on' : 'off';
      inlineToggle.setAttribute('aria-checked', String(alsEnabled));
      inlineToggle.querySelector('small').textContent = alsEnabled ? 'On' : 'Off';
    }

    if (supplemental.size) {
      displayAlsContent();
      inlineToggle.hidden = false;
      inlineToggle.addEventListener('click', () => {
        saveAlsPreference(!alsEnabled);
        displayAlsContent();
        inlineToggle.dispatchEvent(new Event('change'));
      });
    }
  }

  const headings = [...prose.querySelectorAll('h2[id]')];
  const index = document.getElementById('pageIndex');
  if (index && headings.length > 1) {
    const list = index.querySelector('ol');
    for (const heading of headings) {
      const link = document.createElement('a');
      link.href = '#' + encodeURIComponent(heading.id);
      link.textContent = heading.textContent;
      const item = document.createElement('li');
      item.append(link);
      list.append(item);
      if (supplemental.has(heading) && inlineToggle) {
        const updateVisibility = () => { item.hidden = heading.hidden; };
        updateVisibility();
        inlineToggle.addEventListener('change', updateVisibility);
      }
    }
    index.querySelector('details').open = !matchMedia('(max-width: 1120px)').matches;
    index.hidden = false;
  }

  const search = document.getElementById('termSearchInput');
  if (search) {
    enableTermSearch(prose, search, document.getElementById('termSearchCount'));
    document.getElementById('termSearchWrap').hidden = false;
  }

  window.renderMathInElement?.(prose, {
    delimiters: [{ left: '$$', right: '$$', display: true }, { left: '$', right: '$', display: false }]
  });

  var termsDataEl = document.getElementById('moduleKeyTermsData');
  var dialog = document.getElementById('termDialog');

  function cleanTermText(str) {
    return (str || '').replace(/\s+/g, ' ').replace(/[:—–\-\s]+$/, '').trim();
  }

  function cleanDefText(str) {
    return (str || '').replace(/^\s*[:—–\-]+\s*/, '').replace(/\s+/g, ' ').trim();
  }

  function isWordChar(ch) {
    return !!ch && /[A-Za-z0-9]/.test(ch);
  }

  function parseKeyTermsHtml(html) {
    var entries = [];
    var aliasMap = Object.create(null);
    var doc = new DOMParser().parseFromString(html || '', 'text/html');

    function registerEntry(rawTerm, rawDef) {
      var term = cleanTermText(rawTerm);
      var def = cleanDefText(rawDef);
      if (!term || !def || term.length < 2) return;
      var entry = { term: term, definition: def };

      function addAlias(alias) {
        var clean = cleanTermText(alias);
        if (!clean || clean.length < 2) return;
        var key = clean.toLowerCase();
        if (aliasMap[key]) return;
        aliasMap[key] = entry;
        entries.push({ match: clean, key: key, entry: entry });
      }

      addAlias(term);

      // Register base term and parenthetical acronym (e.g. "Emergency Medical Technician (EMT)")
      var parenMatch = term.match(/^(.+?)\s*\(([^()]+)\)$/);
      if (parenMatch) {
        var base = parenMatch[1].trim();
        var inside = parenMatch[2].trim();
        if (base.length >= 3) addAlias(base);
        if (/^[A-Z0-9][A-Z0-9\-/]{1,7}$/.test(inside)) {
          addAlias(inside);
        }
      }
    }

    // 1. List items and paragraphs starting directly with <strong> or <b>
    doc.querySelectorAll('li, p').forEach(function (el) {
      var firstMeaningful = null;
      for (var i = 0; i < el.childNodes.length; i++) {
        var n = el.childNodes[i];
        if (n.nodeType === 3 && !n.nodeValue.trim()) continue;
        firstMeaningful = n;
        break;
      }
      if (!firstMeaningful || firstMeaningful.nodeType !== 1) return;
      if (firstMeaningful.tagName !== 'STRONG' && firstMeaningful.tagName !== 'B') return;

      var clone = el.cloneNode(true);
      clone.querySelectorAll('ul, ol').forEach(function (sub) { sub.remove(); });
      var strongEl = clone.firstElementChild;
      if (!strongEl) return;
      var termText = strongEl.textContent || '';
      strongEl.remove();
      var restText = clone.textContent || '';
      if (termText.trim() && restText.trim()) {
        registerEntry(termText, restText);
      }
    });

    // 2. Tables (| Term | Definition |)
    doc.querySelectorAll('tr').forEach(function (tr) {
      var cells = tr.querySelectorAll('td');
      if (cells.length >= 2) {
        registerEntry(cells[0].textContent, cells[1].textContent);
      }
    });

    // 3. Definition lists (<dl><dt><dd>)
    doc.querySelectorAll('dt').forEach(function (dt) {
      var dd = dt.nextElementSibling;
      if (dd && dd.tagName === 'DD') {
        registerEntry(dt.textContent, dd.textContent);
      }
    });

    // 4. Headings (<h2>/<h3>/<h4>) followed immediately by a <p>
    doc.querySelectorAll('h2, h3, h4').forEach(function (h) {
      var next = h.nextElementSibling;
      if (next && next.tagName === 'P') {
        registerEntry(h.textContent, next.textContent);
      }
    });

    entries.sort(function (a, b) { return b.match.length - a.match.length; });
    return { entries: entries, aliasMap: aliasMap };
  }

  function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  if (termsDataEl && dialog) {
    try {
      var data = JSON.parse(termsDataEl.textContent);
      var parsed = parseKeyTermsHtml(data);

      if (parsed.entries.length > 0) {
        var pattern = new RegExp(
          '(' + parsed.entries.map(function (item) {
            return escapeRegExp(item.match);
          }).join('|') + ')',
          'gi'
        );

        var containers = document.querySelectorAll('[data-autolink-terms="true"]');
        var skipTags = { A: 1, BUTTON: 1, CODE: 1, PRE: 1, SCRIPT: 1, STYLE: 1, H1: 1, H2: 1, H3: 1, H4: 1, H5: 1, H6: 1 };

        containers.forEach(function (container) {
          var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
          var textNodes = [];
          var linkedTerms = new Set();
          var node;
          while ((node = walker.nextNode())) {
            if (!node.nodeValue || !node.nodeValue.trim()) continue;
            var parent = node.parentNode;
            var skip = false;
            while (parent && parent !== container) {
              if (skipTags[parent.tagName] || parent.classList.contains('katex')) { skip = true; break; }
              parent = parent.parentNode;
            }
            if (!skip) textNodes.push(node);
          }

          textNodes.forEach(function (textNode) {
            var text = textNode.nodeValue;
            pattern.lastIndex = 0;
            var match;
            var matches = [];

            while ((match = pattern.exec(text)) !== null) {
              var start = match.index;
              var end = start + match[0].length;
              var prevChar = start > 0 ? text.charAt(start - 1) : '';
              var nextChar = end < text.length ? text.charAt(end) : '';
              var entry = parsed.aliasMap[match[0].toLowerCase()];
              if (!isWordChar(prevChar) && !isWordChar(nextChar) && !linkedTerms.has(entry)) {
                linkedTerms.add(entry);
                matches.push({ start: start, end: end, text: match[0] });
              }
            }

            if (matches.length === 0) return;

            var frag = document.createDocumentFragment();
            var lastIdx = 0;
            matches.forEach(function (m) {
              if (m.start > lastIdx) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx, m.start)));
              }
              var btn = document.createElement('button');
              btn.type = 'button';
              btn.className = 'key-term-link';
              btn.textContent = m.text;
              btn.setAttribute('data-term-key', m.text.toLowerCase());
              frag.appendChild(btn);
              lastIdx = m.end;
            });

            if (lastIdx < text.length) {
              frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }
            textNode.parentNode.replaceChild(frag, textNode);
          });
        });

        var titleEl = document.getElementById('termDialogTitle');
        var bodyEl = document.getElementById('termDialogBody');
        var closeDialogBtn = document.getElementById('termDialogClose');

        document.addEventListener('click', function (e) {
          var btn = e.target.closest('.key-term-link');
          if (!btn) return;
          var item = parsed.aliasMap[btn.getAttribute('data-term-key')];
          if (!item) return;
          titleEl.textContent = item.term;
          bodyEl.textContent = item.definition;
          if (typeof dialog.showModal === 'function') {
            dialog.showModal();
          } else {
            dialog.setAttribute('open', 'open');
          }
        });

        if (closeDialogBtn) {
          closeDialogBtn.addEventListener('click', function () { dialog.close(); });
        }

        dialog.addEventListener('click', function (e) {
          var rect = dialog.getBoundingClientRect();
          var inDialog = (
            e.clientX >= rect.left && e.clientX <= rect.right &&
            e.clientY >= rect.top && e.clientY <= rect.bottom
          );
          if (!inDialog) dialog.close();
        });
      }
    } catch (err) {
      // Fail silently if key terms parsing encounters malformed input
    }
  }
})();
