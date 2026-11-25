# EMT Course Notes

A lightweight, GitHub Pages–ready Jekyll layout for EMT study materials.

## Folder Structure

Keep folder names clean URL slugs inside `_content/`, and control display order and titles in `_data/course.yml`:

```text
_content/
├── module-1/
│   ├── key-terms.md       # Module-level (shown above chapters + powers auto-link popups)
│   ├── study-guide.md     # Module-level (shown above chapters)
│   ├── chapter-7/
│   │   ├── outline.md
│   │   ├── mindmap.md
│   │   ├── pq4rs.md
│   │   └── study-guide.md # Optional chapter study guide (opens via header button)
│   └── chapter-8/
│       └── outline.md
└── module-2/
    └── chapter-1/
        ├── outline.md
        ├── mindmap.md
        └── pq4rs.md
```

- Every `.md` file in `_content/` needs YAML front matter at the top (at minimum two lines of `---`) so Jekyll renders it as a page.
- `mindmap.md` supports standard `markmap:` front matter (`colorFreezeLevel`, `initialExpandLevel`, `wrapWidth` / `maxWidth`) and renders with zoom, fit, expand/collapse, and fullscreen controls.
- `key-terms.md` inside a module automatically highlights matching terms across that module's chapters and opens a definition popup when clicked.

## Running Locally

```bash
bundle install
bundle exec jekyll serve --port 4001
```

Then open `http://127.0.0.1:4001/emt/` (or pass `--baseurl ""` to serve at `http://127.0.0.1:4001/`).
