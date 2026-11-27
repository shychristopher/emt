let renderer;
let renderQueue = Promise.resolve();

function loadRenderer() {
  if (!renderer) {
    renderer = import('https://cdn.jsdelivr.net/npm/mermaid@11.12.2/dist/mermaid.esm.min.mjs')
      .then(({ default: mermaid }) => {
        mermaid.initialize({
          startOnLoad: false,
          securityLevel: 'strict',
          theme: 'neutral',
          htmlLabels: false,
          flowchart: { useMaxWidth: false }
        });
        return mermaid;
      });
  }
  return renderer;
}

document.querySelectorAll('#readingText pre code.language-mermaid').forEach((code, index) => {
  const pre = code.closest('pre');
  const block = code.closest('.highlighter-rouge') || pre;
  const title = block.previousElementSibling;
  const details = document.createElement('details');
  details.className = 'concept-map';
  const summary = document.createElement('summary');
  summary.textContent = 'View diagram';
  if (title?.matches('h2, h3, h4')) {
    summary.setAttribute('aria-label', 'View diagram: ' + title.textContent);
  }

  const output = document.createElement('div');
  output.className = 'diagram-output';
  output.hidden = true;
  const status = document.createElement('p');
  status.setAttribute('role', 'status');
  const source = document.createElement('details');
  const sourceLabel = document.createElement('summary');
  sourceLabel.textContent = 'View diagram source';
  source.append(sourceLabel);

  block.before(details);
  source.append(block);
  details.append(summary, status, output, source);

  const syncVisibility = () => { details.hidden = block.hidden; };
  syncVisibility();
  document.getElementById('alsPreference')?.addEventListener('change', syncVisibility);

  details.addEventListener('toggle', () => {
    if (!details.open || details.dataset.requested) return;
    details.dataset.requested = 'true';
    status.textContent = 'Drawing diagram…';
    renderQueue = renderQueue.then(async () => {
      try {
        const mermaid = await loadRenderer();
        const { svg } = await mermaid.render('concept-map-' + (index + 1), code.textContent);
        output.innerHTML = svg;
        output.hidden = false;
        output.tabIndex = 0;
        output.setAttribute('role', 'region');
        output.setAttribute('aria-label', title?.textContent || 'Concept map');
        status.textContent = '';
      } catch (error) {
        status.textContent = 'This diagram could not load. Its source is available below.';
        source.open = true;
      }
    });
  });
});
