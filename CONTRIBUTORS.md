# Contributing study material

Keep your working files in the `Text Book` folder and import approved study material into the Jekyll checkout. The site uses a separate Markdown file for each study view. A chapter flashcard deck is a two-column TSV plus a short Markdown page that points to it.

## 1. Name the source files

Use zero-padded numbers in source folder and file names. A chapter keeps its book chapter number, even if its module has a different number. For example:

```text
Text Book/
└── module-02/
    ├── md-02-outline.md
    ├── md-02-tldr.md
    └── chapter-01/
        ├── ch-01-outline.md
        ├── ch-01-kterm.md
        └── 01.flashcards.tsv
```

If both outline source names exist, the importer uses `*-outline.md`. The same suffixes work for a module file such as `md-02-outline.md` and a chapter file such as `ch-01-outline.md`.

| Source suffix | Published Markdown | View |
| --- | --- | --- |
| `outline.md` (or legacy `study.md`) | `outline.md` | Outline |
| `tldr.md` | `summary.md` | Summary |
| `pq4rs.md` | `pq4rs.md` | PQ4RS |
| `map.md` | `mindmap.md` | Mind Map |
| `concept.md` | `concept-maps.md` | Concept Maps |
| `kterm.md` | `key-terms.md` | Chapter Key Terms |

Chapter flashcards use `NN.flashcards.tsv`. Module Key Terms and Flashcards collect the chapter resources in course order, so add the underlying terms and cards at chapter level. The importer creates the relevant module tab when it sees the first chapter glossary or deck. If you are editing the repository by hand and want the aggregate tab, use the matching module page in `_content/module-2/` as a model, update `module_id`, and leave out its legacy redirects.

Keep raw `*-bls.md`, `*-als.md`, prompts, and other working notes outside the repository. The importer reads only the publishable names listed above. Put ALS content you intend to publish inside the relevant study view.

## 2. Format each file

- **Outline, Summary, and PQ4RS.** Use UTF-8 Markdown. Start with a single H1 for the source title, then use H2s for major sections and lower levels for subsections. H2s drive the reader’s on-page navigation. Standard Markdown lists and tables work.
- **Mind Map.** Use headings and nested Markdown lists. Put one branch or point per list item and indent child items. The site builds the interactive map from that hierarchy and also provides an outline view.
- **Concept Maps.** Use fenced `mermaid` blocks. Put a descriptive heading immediately above each diagram. Mermaid fences also work in the other Markdown views.
- **Key Terms.** Use a top-level bullet per definition, formatted `- **Term (ACRONYM)**: Definition.` Keep alternate chapter definitions as separate entries. The site uses the glossary for search and chapter definition popups.
- **Flashcards.** Save UTF-8 TSV with one question and answer per line, separated by one literal tab. Use one physical line per card and leave out the header row, blank rows, and extra columns. The module deck keeps the order within each chapter and shows the source chapter as you study.

For the **ALS Connections** switch, start a quoted callout, paragraph label, heading, or list branch with `ALS Connection`. A heading’s subsection stays under the switch through the next heading at the same or higher level. Keep the next core topic outside that subsection.

```markdown
> [!NOTE]
> **ALS Connection — Topic.** Add the supplemental explanation here.

#### ALS Connection: Longer topic

Supplemental text, lists, or a diagram can go here.

#### Next core topic
```

For a mind map, use a branch such as `- **ALS Connection — Topic**` and nest the details below it. The switch changes what readers see by default. Treat anything in a published study file as public.

## 3. Import into your branch

Run these from the repository root with Python 3.9 or newer. The first command previews the changes. Add `--write` to apply them.

```sh
study_source="$HOME/Library/Mobile Documents/com~apple~CloudDocs/Text Book"
python3 scripts/import_study_materials.py "$study_source"
python3 scripts/import_study_materials.py "$study_source" --write
git status --short
```

You can point the script to any folder containing the same `module-NN/` structure, including a staging folder with only the chapter or views you’re updating. The script copies matching files, validates decks, and preserves the front matter of existing pages. It leaves files absent from the source folder in place. It does not commit or publish anything.

Source Markdown can start directly with the body or with an empty pair of `---` delimiters. The script adds Jekyll front matter to new pages. If you edit the repository Markdown directly, the final chapter guide looks like this:

```markdown
---
title: Outline
module_id: module-2
chapter_id: chapter-1
view: outline
---

# Chapter 1: EMS Systems, Research, and Public Health

## The EMS system
```

Module pages omit `chapter_id`. Published paths use unpadded IDs such as `_content/module-2/chapter-1/outline.md`. Decks go to `assets/flashcards/module-2/chapter-1/flashcards.tsv`. Their chapter page uses `view: flashcards` and `deck: /assets/flashcards/module-2/chapter-1/flashcards.tsv`; the importer adds that page for you.

When you add or rename a module or chapter, update [`_data/course.yml`](_data/course.yml) with the unpadded ID, quoted display number, title, and placement in the course. The site uses that file to label and order navigation. [`_data/views.yml`](_data/views.yml) defines view labels and tab order.

## 4. Publish a partial module or add Quizlet links

Add the module and chapter entries to `_data/course.yml`, then import whichever files are ready. A chapter with only Key Terms opens directly to its glossary. The floating bar shows only groups and views with resources, so new chapters can start with a single file. Keep the rest of your drafts in the source folder until they are ready.

Paste an individual set URL under a chapter’s `quizlet` field. You can also set `quizlet` on the module if you have one set covering the whole module.

```yaml
- id: module-3
  number: "03"
  title: Example module
  chapters:
    - id: chapter-9
      number: "09"
      title: Example chapter
      quizlet: "https://quizlet.com/123456789/example-chapter-flash-cards/"
```

A chapter with only a Quizlet link can appear in the library. On chapter pages with other resources, Quizlet appears in the Practice drawer. A module's Flashcards page also lists the Quizlet sets from its chapters. Existing TSVs can still power the on-site deck. If you only have Quizlet links and want a module Flashcards page to collect them, add the module's Flashcards stub as described above.

## 5. Preview and review

Use the Ruby and Bundler versions compatible with `Gemfile.lock`. This checkout has been tested with Ruby 3.4.1 and Bundler 4.1.0.

```sh
bundle check
bundle exec jekyll serve --port 4001
```

Run `bundle install` if dependencies are missing, then open `http://127.0.0.1:4001/emt/`. Check the updated chapter and the module tabs, try one glossary search or flashcard as applicable, and check ALS Connections in both states where you changed ALS content. Review `git diff` and `git status --short` before committing to your branch.
