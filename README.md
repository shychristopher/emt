# EMT Course Notes

A lightweight, GitHub Pages–ready Jekyll layout for EMT study materials.

## Folder Structure

Keep folder names clean URL slugs inside `_content/`, and set display order and chapter titles in `_data/course.yml` (omitting `title` automatically falls back to the folder name, e.g. `chapter-7` → `Chapter 7`):

```text
_content/
├── overview/                  # Course-wide Full Overview (outline.md, mindmap.md, pq4rs.md, optional study-guide.md)
├── tldr/                      # Course-wide TL;DR / 5-mile-high brief (outline.md, mindmap.md, pq4rs.md...)
├── module-1/
│   ├── overview/              # Module Full Overview (outline.md, mindmap.md, pq4rs.md...)
│   ├── tldr/                  # Module TL;DR (outline.md, mindmap.md, pq4rs.md...)
│   ├── key-terms.md           # Module Key Terms (searchable list + inline Mind Map toggle + auto-link popups)
│   ├── key-terms-mindmap.md   # Optional dedicated Mind Map for Key Terms (adds Terms List | Mind Map bottom bar)
│   ├── study-guide.md         # Module Study Guide
│   ├── chapter-7/
│   │   ├── outline.md
│   │   ├── mindmap.md
│   │   ├── pq4rs.md
│   │   └── study-guide.md     # Optional chapter Study Guide (opens via header button)
│   └── chapter-8/
│       └── outline.md
└── module-2/
    └── chapter-1/
        ├── outline.md
        ├── mindmap.md
        └── pq4rs.md
```

- Every `.md` file in `_content/` needs YAML front matter at the top (at minimum two lines of `---`) so Jekyll renders it as a page.
- `overview/` (or `deep-dive/`) and `tldr/` (or `summary/`) work identically at both the **course level** and **module level** with the full floating bottom switcher (`Mind Map` | `Outline` | `PQ4Rs` | etc.).
- `mindmap.md` supports standard `markmap:` front matter (`colorFreezeLevel`, `initialExpandLevel`, `wrapWidth` / `maxWidth`) and renders with zoom, fit, expand/collapse, and fullscreen controls.
- `key-terms.md` inside a module automatically highlights matching terms across that module's chapters (and across all course-wide Overview/TL;DR pages) and opens a definition popup when clicked.

## Running Locally

```bash
bundle install
bundle exec jekyll serve --port 4001
```

Then open `http://127.0.0.1:4001/emt/` (or pass `--baseurl ""` to serve at `http://127.0.0.1:4001/`).
