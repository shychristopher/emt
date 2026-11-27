# EMT Course Notes

An unofficial, GitHub Pages–ready Jekyll study library. Each module has a Study Guide, Rapid Review, PQ4RS, Mind Map, and Concept Maps. Chapters also have searchable Key Terms and Flashcards.

## ALS Connections

ALS Connections starts off. The switch shows labeled ALS sections and branches in Study Guides, Rapid Review, PQ4RS, and Mind Maps. The browser remembers the setting.

## Content layout

- `_data/course.yml` holds module and chapter titles and navigation order.
- `_data/views.yml` holds study view labels and order.
- `_content/module-N/` holds module resources. Each `chapter-N/` adds its own views. Front matter identifies the module, optional chapter, and view. Each page's Markdown body follows its front matter.
- `assets/flashcards/module-N/chapter-N/flashcards.tsv` holds the original two-column deck. The Flashcards page points to it via its `deck` front matter.
- Mind Map pages use nested Markdown to build an interactive Markmap. Concept Maps pages use Mermaid code fences and render one diagram at a time when opened. The underlying outline and diagram source remain readable if the external renderers are unavailable.

Old outline and overview URLs redirect to their corresponding Study Guide or Rapid Review. Retired course-wide pages redirect to the library, and retired module glossary URLs go to their module, where chapter glossaries are available.

## Run locally

Use the Ruby and Bundler versions that support the lockfile, then run:

```sh
bundle install
bundle exec jekyll serve --port 4001
```

Open `http://127.0.0.1:4001/emt/`. To serve from the root, pass `--baseurl ""`.
