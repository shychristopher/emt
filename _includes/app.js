(function () {
  var sidebar = document.getElementById('sidebar');
  var backdrop = document.getElementById('drawerBackdrop');
  var openBtn = document.getElementById('drawerOpen');
  var closeBtn = document.getElementById('drawerClose');
  var themeBtn = document.getElementById('themeToggle');

  function setDrawer(open) {
    if (!sidebar || !backdrop) return;
    sidebar.classList.toggle('is-open', open);
    backdrop.classList.toggle('is-open', open);
    if (openBtn) openBtn.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (openBtn) openBtn.addEventListener('click', function () { setDrawer(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
  if (backdrop) backdrop.addEventListener('click', function () { setDrawer(false); });

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('emt-theme', next);
    });
  }

  // Keep active sidebar link visible
  var activeLink = document.querySelector('.sidebar .nav-link.is-active');
  if (activeLink && typeof activeLink.scrollIntoView === 'function') {
    activeLink.scrollIntoView({ block: 'nearest' });
  }

  // Wrap tables in scrollable container for mobile
  document.querySelectorAll('.prose table').forEach(function (table) {
    if (table.parentNode && table.parentNode.classList.contains('table-wrap')) return;
    var wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });

  // Mindmap renderer (builds clean Markmap tree from rendered DOM + YAML markmap options + toolbar controls)
  var mmOptsEl = document.getElementById('mindmapOptionsData');
  var mmArticle = document.getElementById('chapterArticle');
  var mmStage = document.getElementById('mindmapStage');
  var mmSvg = document.getElementById('mindmapSvg');
  var mmStatus = document.getElementById('mindmapStatus');
  var mmToggle = document.getElementById('mindmapViewToggle');
  var mmProse = document.getElementById('mindmapProse');
  var termSearchWrap = document.getElementById('termSearchWrap');
  var mmInstance = null;
  var mmRoot = null;
  var mmInitStarted = false;
  var mmInitialExpand = 2;

  function setFullscreen(on) {
    if (!mmStage) return;
    mmStage.classList.toggle('is-fullscreen', on);
    var fsBtn = document.getElementById('mmFullscreen');
    if (fsBtn) fsBtn.textContent = on ? 'Exit' : 'Full';
    if (mmInstance) {
      setTimeout(function () { mmInstance.fit(); }, 50);
    }
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setDrawer(false);
      if (mmStage && mmStage.classList.contains('is-fullscreen')) {
        setFullscreen(false);
      }
    }
  });

  function initMindmapIfNeeded() {
    if (mmInitStarted || !mmSvg || !mmStage || !mmProse) return;
    mmInitStarted = true;

    var yamlOpts = {};
    try { yamlOpts = (mmOptsEl && JSON.parse(mmOptsEl.textContent)) || {}; } catch (e) {}

    mmInitialExpand = typeof yamlOpts.initialExpandLevel === 'number' ? yamlOpts.initialExpandLevel : 2;
    var maxWidth = yamlOpts.maxWidth || yamlOpts.wrapWidth || 340;
    var colorFreezeLevel = typeof yamlOpts.colorFreezeLevel === 'number' ? yamlOpts.colorFreezeLevel : 2;

    var fallbackTitleEl = document.querySelector('.chapter-title');
    mmRoot = buildMarkmapTreeFromProse(mmProse, fallbackTitleEl ? fallbackTitleEl.textContent : 'Mind Map');
    if (mmInitialExpand > 0) {
      applyFoldDepth(mmRoot, 0, mmInitialExpand);
    }

    loadScript('https://cdn.jsdelivr.net/npm/d3@7')
      .then(function () { return loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.18'); })
      .then(function () {
        if (!window.markmap || !window.markmap.Markmap) {
          throw new Error('Markmap view library unavailable');
        }

        var opts = typeof window.markmap.deriveOptions === 'function'
          ? window.markmap.deriveOptions({
              colorFreezeLevel: colorFreezeLevel,
              initialExpandLevel: mmInitialExpand,
              maxWidth: maxWidth,
              duration: 280
            })
          : {
              initialExpandLevel: mmInitialExpand,
              maxWidth: maxWidth,
              duration: 280
            };

        if (mmStatus) mmStatus.classList.add('is-hidden');
        mmInstance = window.markmap.Markmap.create(mmSvg, opts, mmRoot);
        setTimeout(function () { if (mmInstance) mmInstance.fit(); }, 60);

        var zoomInBtn = document.getElementById('mmZoomIn');
        var zoomOutBtn = document.getElementById('mmZoomOut');
        var fitBtn = document.getElementById('mmFit');
        var expandBtn = document.getElementById('mmExpandAll');
        var collapseBtn = document.getElementById('mmCollapse');
        var fsBtn = document.getElementById('mmFullscreen');

        if (zoomInBtn) zoomInBtn.addEventListener('click', function () { mmInstance.rescale(1.25); });
        if (zoomOutBtn) zoomOutBtn.addEventListener('click', function () { mmInstance.rescale(0.8); });
        if (fitBtn) fitBtn.addEventListener('click', function () { mmInstance.fit(); });
        if (expandBtn) {
          expandBtn.addEventListener('click', function () {
            applyFoldDepth(mmRoot, 0, -1);
            mmInstance.setData(mmRoot);
            setTimeout(function () { mmInstance.fit(); }, 60);
          });
        }
        if (collapseBtn) {
          collapseBtn.addEventListener('click', function () {
            applyFoldDepth(mmRoot, 0, mmInitialExpand);
            mmInstance.setData(mmRoot);
            setTimeout(function () { mmInstance.fit(); }, 60);
          });
        }
        if (fsBtn) {
          fsBtn.addEventListener('click', function () {
            setFullscreen(!mmStage.classList.contains('is-fullscreen'));
          });
        }

        window.addEventListener('resize', function () {
          if (mmInstance && !mmStage.classList.contains('is-hidden')) {
            mmInstance.fit();
          }
        });
      })
      .catch(function () {
        if (mmStatus) mmStatus.textContent = 'Mind map could not load — showing Markdown view.';
        if (mmStage && mmProse) {
          mmStage.classList.add('is-hidden');
          mmProse.classList.remove('is-hidden');
          if (mmArticle) mmArticle.classList.remove('is-mindmap-page');
          if (termSearchWrap) termSearchWrap.classList.remove('is-hidden');
          if (mmToggle) {
            mmToggle.setAttribute('data-mode', 'prose');
            mmToggle.textContent = 'View as Mind Map';
          }
        }
      });
  }

  if (mmToggle && mmStage && mmProse) {
    mmToggle.addEventListener('click', function () {
      var showingMap = mmToggle.getAttribute('data-mode') === 'map';
      if (showingMap) {
        if (mmStage.classList.contains('is-fullscreen')) setFullscreen(false);
        mmStage.classList.add('is-hidden');
        mmProse.classList.remove('is-hidden');
        if (mmArticle) mmArticle.classList.remove('is-mindmap-page');
        if (termSearchWrap) termSearchWrap.classList.remove('is-hidden');
        mmToggle.setAttribute('data-mode', 'prose');
        mmToggle.textContent = 'View as Mind Map';
      } else {
        mmProse.classList.add('is-hidden');
        mmStage.classList.remove('is-hidden');
        if (mmArticle) mmArticle.classList.add('is-mindmap-page');
        if (termSearchWrap) termSearchWrap.classList.add('is-hidden');
        mmToggle.setAttribute('data-mode', 'map');
        mmToggle.textContent = 'View as List';
        initMindmapIfNeeded();
        if (mmInstance) setTimeout(function () { mmInstance.fit(); }, 60);
      }
    });
  }

  function applyFoldDepth(node, depth, maxDepth) {
    if (!node) return;
    if (!node.payload) node.payload = {};
    node.payload.fold = maxDepth < 0 ? 0 : (depth >= maxDepth ? 1 : 0);
    if (node.children) {
      node.children.forEach(function (child) {
        applyFoldDepth(child, depth + 1, maxDepth);
      });
    }
  }

  // Convert Kramdown HTML into a clean Markmap tree, lifting any headings trapped inside <li>
  function buildMarkmapTreeFromProse(container, fallbackTitle) {
    var root = null;
    var headingStack = [];

    function pushHeading(level, html) {
      var node = { content: html, children: [], payload: {} };
      while (headingStack.length > 0 && headingStack[headingStack.length - 1].level >= level) {
        headingStack.pop();
      }
      if (headingStack.length === 0) {
        if (!root) {
          root = node;
        } else {
          root.children.push(node);
        }
      } else {
        headingStack[headingStack.length - 1].node.children.push(node);
      }
      headingStack.push({ level: level, node: node });
      return node;
    }

    function currentHeadingNode() {
      if (headingStack.length > 0) return headingStack[headingStack.length - 1].node;
      if (!root) {
        root = { content: fallbackTitle || 'Mind Map', children: [], payload: {} };
      }
      return root;
    }

    function processListItem(li, parentNode) {
      var clone = li.cloneNode(true);
      var nestedLists = [];
      var trappedHeadings = [];

      Array.from(clone.childNodes).forEach(function (child) {
        if (child.nodeType !== 1) return;
        var tag = child.tagName;
        if (tag === 'UL' || tag === 'OL') {
          nestedLists.push(child);
          child.remove();
        } else if (/^H[1-6]$/.test(tag)) {
          trappedHeadings.push(child);
          child.remove();
        }
      });

      clone.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function (h) {
        trappedHeadings.push(h);
        h.remove();
      });

      var labelHtml = clone.innerHTML.trim();
      var itemNode = parentNode;
      if (labelHtml) {
        itemNode = { content: labelHtml, children: [], payload: {} };
        parentNode.children.push(itemNode);
      }

      nestedLists.forEach(function (listEl) {
        Array.from(listEl.children).forEach(function (subLi) {
          if (subLi.tagName === 'LI') processListItem(subLi, itemNode);
        });
      });

      trappedHeadings.forEach(function (h) {
        var lvl = parseInt(h.tagName.slice(1), 10);
        pushHeading(lvl, h.innerHTML.trim());
      });
    }

    Array.from(container.children).forEach(function (el) {
      var tag = el.tagName;
      if (/^H[1-6]$/.test(tag)) {
        var lvl = parseInt(tag.slice(1), 10);
        pushHeading(lvl, el.innerHTML.trim());
      } else if (tag === 'UL' || tag === 'OL') {
        Array.from(el.children).forEach(function (li) {
          if (li.tagName === 'LI') processListItem(li, currentHeadingNode());
        });
      } else if (tag === 'P' && el.innerHTML.trim()) {
        currentHeadingNode().children.push({
          content: el.innerHTML.trim(),
          children: [],
          payload: {}
        });
      }
    });

    return root || { content: fallbackTitle || 'Mind Map', children: [], payload: {} };
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  if (mmSvg && mmStage && mmStage.getAttribute('data-lazy') !== 'true') {
    initMindmapIfNeeded();
  }

  // Live filter on key-terms.md list view
  var termSearchInput = document.getElementById('termSearchInput');
  var termSearchCount = document.getElementById('termSearchCount');
  if (termSearchInput) {
    var proseContainer = document.querySelector('.prose');
    var filterItems = proseContainer ? Array.from(proseContainer.querySelectorAll('li, tbody tr')) : [];
    termSearchInput.addEventListener('input', function () {
      var q = termSearchInput.value.trim().toLowerCase();
      var shown = 0;
      filterItems.forEach(function (item) {
        var match = !q || (item.textContent || '').toLowerCase().indexOf(q) !== -1;
        item.classList.toggle('is-hidden', !match);
        if (match) shown++;
      });
      if (termSearchCount) {
        termSearchCount.textContent = q ? (shown + ' of ' + filterItems.length) : '';
      }
    });
  }

  // Key Terms Parser (HTML-based — order-independent, handles colon inside/outside bold, tables, headings, acronyms)
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
      var parsed = parseKeyTermsHtml(data.html);

      if (parsed.entries.length > 0) {
        var pattern = new RegExp(
          '(' + parsed.entries.map(function (item) {
            return escapeRegExp(item.match);
          }).join('|') + ')',
          'gi'
        );

        var containers = document.querySelectorAll('[data-autolink-terms="true"]');
        var skipTags = { A: 1, BUTTON: 1, CODE: 1, PRE: 1, SCRIPT: 1, STYLE: 1, H1: 1, H2: 1, H3: 1 };

        containers.forEach(function (container) {
          var walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null);
          var textNodes = [];
          var node;
          while ((node = walker.nextNode())) {
            if (!node.nodeValue || !node.nodeValue.trim()) continue;
            var parent = node.parentNode;
            var skip = false;
            while (parent && parent !== container) {
              if (skipTags[parent.tagName]) { skip = true; break; }
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
              if (!isWordChar(prevChar) && !isWordChar(nextChar)) {
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
