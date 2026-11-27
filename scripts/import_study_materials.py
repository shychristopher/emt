#!/usr/bin/env python3
"""Import publishable materials from a Text Book folder into this Jekyll checkout."""

import argparse
from pathlib import Path
import re
import sys

REPO = Path(__file__).resolve().parents[1]
VIEWS = {
    "study": ("study-guide", "Study Guide"),
    "tldr": ("rapid-review", "Rapid Review"),
    "pq4rs": ("pq4rs", "PQ4RS"),
    "map": ("mindmap", "Mind Map"),
    "concept": ("concept-maps", "Concept Maps"),
}
FRONT_MATTER = re.compile(r"\A---[ \t]*\n(.*?)^---[ \t]*(?:\n|\Z)", re.MULTILINE | re.DOTALL)


def numbered_folders(root, kind):
    folders = {}
    for path in sorted(root.iterdir()):
        match = re.fullmatch(rf"{kind}-([0-9]+)", path.name)
        if not match or not path.is_dir():
            continue
        number = int(match[1])
        if number == 0 or number in folders:
            raise ValueError(f"Invalid or duplicate {kind} number in {path}")
        folders[number] = path
    return sorted(folders.items())


def markdown_body(source):
    text = source.read_text(encoding="utf-8-sig")
    header = FRONT_MATTER.match(text)
    if header:
        if header[1].strip():
            raise ValueError(f"{source}: use a Markdown body or empty front matter")
        text = text[header.end():].removeprefix("\n")
    if not text.strip():
        raise ValueError(f"{source}: empty Markdown")
    return text


def plan_page(changes, path, module_id, view, title, body="", chapter_id=None, deck=None):
    if path.is_file():
        existing = path.read_text(encoding="utf-8")
        header = FRONT_MATTER.match(existing)
        if not header:
            raise ValueError(f"{path}: expected existing Jekyll front matter")
        front_matter = header[0].rstrip("\n")
        if deck and f"deck: {deck}" not in header[1].splitlines():
            raise ValueError(f"{path}: update its deck field to {deck} before importing")
    else:
        fields = [f"title: {title}", f"module_id: {module_id}"]
        if chapter_id:
            fields.append(f"chapter_id: {chapter_id}")
        fields.append(f"view: {view}")
        if deck:
            fields.append(f"deck: {deck}")
        front_matter = "\n".join(["---", *fields, "---"])
    page = front_matter + ("\n\n" + body if body else "\n")
    changes[path] = page.encode("utf-8")


def collect_markdown(changes, source, prefix, module_id, chapter_id=None):
    destination = REPO / "_content" / module_id
    views = VIEWS
    if chapter_id:
        destination /= chapter_id
        views = {**VIEWS, "kterm": ("key-terms", "Key Terms")}
    for suffix, (view, title) in views.items():
        draft = source / f"{prefix}-{suffix}.md"
        if draft.is_file():
            plan_page(changes, destination / f"{view}.md", module_id, view, title,
                      markdown_body(draft), chapter_id)


def collect_deck(changes, source, module_id, chapter_id):
    data = source.read_bytes()
    rows = data.decode("utf-8-sig").splitlines()
    if not rows:
        raise ValueError(f"{source}: empty deck")
    for number, row in enumerate(rows, start=1):
        fields = row.split("\t")
        if len(fields) != 2 or not all(field.strip() for field in fields):
            raise ValueError(f"{source}:{number}: expected a question and answer separated by one tab")
    path = Path("assets/flashcards") / module_id / chapter_id / "flashcards.tsv"
    changes[REPO / path] = data
    plan_page(changes, REPO / "_content" / module_id / chapter_id / "flashcards.md",
              module_id, "flashcards", "Flashcards", chapter_id=chapter_id, deck=f"/{path.as_posix()}")


def plan_import(source):
    changes = {}
    for module_number, module in numbered_folders(source, "module"):
        module_id = f"module-{module_number}"
        collect_markdown(changes, module, f"md-{module_number:02}", module_id)
        module_destination = REPO / "_content" / module_id
        for chapter_number, chapter in numbered_folders(module, "chapter"):
            chapter_id = f"chapter-{chapter_number}"
            collect_markdown(changes, chapter, f"ch-{chapter_number:02}", module_id, chapter_id)
            deck = chapter / f"{chapter_number:02}.flashcards.tsv"
            if deck.is_file():
                collect_deck(changes, deck, module_id, chapter_id)
        for view, title in (("key-terms", "Key Terms"), ("flashcards", "Flashcards")):
            aggregate = module_destination / f"{view}.md"
            has_chapter_view = any(
                path.name == aggregate.name and path.parent.parent == module_destination
                for path in changes
            )
            if has_chapter_view and not aggregate.exists():
                plan_page(changes, aggregate, module_id, view, title)
    if not changes:
        raise ValueError(f"{source}: no publishable files matched the expected names")
    return changes


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("source", type=Path, help="Folder containing module-NN directories")
    parser.add_argument("--write", action="store_true", help="Apply changes. The default is a dry run.")
    args = parser.parse_args()
    try:
        changes = plan_import(args.source.expanduser())
        pending = {
            path: data for path, data in changes.items()
            if not path.is_file() or path.read_bytes() != data
        }
        for path, data in sorted(pending.items()):
            action = "Update" if path.exists() else "Create"
            print(f"{action} {path.relative_to(REPO)}")
            if args.write:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_bytes(data)
        mode = "Written" if args.write else "Dry run"
        print(f"{mode}: {len(pending)} change(s), {len(changes) - len(pending)} already current.")
    except (OSError, ValueError) as error:
        print(f"Import failed: {error}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
