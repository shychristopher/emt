(() => {
  const stage = document.getElementById('mindmapStage');
  const svg = document.getElementById('mindmapSvg');
  const outline = document.getElementById('readingText');
  const toggle = document.getElementById('mindmapViewToggle');
  const status = document.getElementById('mindmapStatus');
  const toolbar = document.getElementById('mapToolbar');
  const fullscreen = document.getElementById('mmFullscreen');
  const index = document.getElementById('pageIndex');
  const initialDepth = 2;
  let map;

  function displayMap(show) {
    stage.hidden = !show;
    outline.hidden = show;
    if (index.querySelector('li')) index.hidden = show;
    toggle.textContent = show ? 'Read as outline' : 'Open interactive map';
    toggle.setAttribute('aria-expanded', String(show));
    if (show && map) requestAnimationFrame(() => map.fit());
  }

  function setFullscreen(active) {
    stage.classList.toggle('is-fullscreen', active);
    document.body.classList.toggle('map-fullscreen', active);
    fullscreen.setAttribute('aria-pressed', String(active));
    fullscreen.textContent = active ? 'Exit fullscreen' : 'Fullscreen';
    requestAnimationFrame(() => map.fit());
  }

  async function startMap() {
    await loadScript('https://cdn.jsdelivr.net/npm/d3@7.9.0/dist/d3.min.js');
    await loadScript('https://cdn.jsdelivr.net/npm/markmap-view@0.18.12/dist/browser/index.js');
    const subject = document.querySelector('.resource-header h1').textContent;
    function mapTree() {
      const root = buildMarkmapTreeFromProse(outline, subject);
      applyFoldDepth(root, 0, initialDepth);
      return root;
    }
    let root = mapTree();
    const options = window.markmap.deriveOptions({
      colorFreezeLevel: 2,
      maxWidth: 340,
      duration: matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 200
    });
    map = window.markmap.Markmap.create(svg, options, root);
    toolbar.hidden = false;
    status.textContent = '';
    displayMap(true);

    document.getElementById('mmZoomIn').addEventListener('click', () => map.rescale(1.25));
    document.getElementById('mmZoomOut').addEventListener('click', () => map.rescale(0.8));
    document.getElementById('mmFit').addEventListener('click', () => map.fit());
    document.getElementById('mmCollapse').addEventListener('click', async () => {
      applyFoldDepth(root, 0, initialDepth);
      await map.setData(root);
      map.fit();
    });
    document.getElementById('alsPreference')?.addEventListener('change', async () => {
      root = mapTree();
      await map.setData(root);
      if (!stage.hidden) map.fit();
    });
    fullscreen.addEventListener('click', () => setFullscreen(!stage.classList.contains('is-fullscreen')));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && stage.classList.contains('is-fullscreen')) setFullscreen(false);
    });
    window.addEventListener('resize', () => { if (!stage.hidden) map.fit(); });
  }

  document.getElementById('mapActions').hidden = false;
  toggle.addEventListener('click', () => displayMap(stage.hidden));
  toggle.disabled = true;
  toggle.textContent = 'Interactive mind map';
  status.textContent = 'Loading interactive map…';
  startMap().catch(() => {
    toggle.hidden = true;
    status.textContent = 'The interactive map could not load. The full outline is available below.';
  }).finally(() => { toggle.disabled = false; });

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
      if (li.hidden) return;
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
      if (el.hidden) return;
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

})();
