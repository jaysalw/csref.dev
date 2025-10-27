# Contributing

[![GitHub Repo stars](https://img.shields.io/github/stars/jaysalw/csref.dev?style=for-the-badge&logo=github)](https://github.com/jaysalw/csref.dev/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/jaysalw/csref.dev?style=for-the-badge)](https://github.com/jaysalw/csref.dev/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/jaysalw/csref.dev?style=for-the-badge&logo=git)](https://github.com/jaysalw/csref.dev/commits/main)
[![License](https://img.shields.io/github/license/jaysalw/csref.dev?style=for-the-badge)](https://github.com/jaysalw/csref.dev/blob/main/LICENSE)

**csref.dev is what it is today thanks to our contributors:**

[![Contributors](https://contrib.rocks/image?repo=jaysalw/csref.dev)](https://github.com/jaysalw/csref.dev/graphs/contributors)

## 🧠 Referencing Guide (IEEE Style)

All content must follow the **IEEE referencing style**, managed automatically via `mkdocs-bibtex`.

### 1. Add entries to the bibliography

Each cited source must appear in the shared file:

```
docs/references.bib
```

Use the following format (IEEE-compliant BibTeX):

```bibtex
@book{knuth1997,
  author    = {Donald E. Knuth},
  title     = {The Art of Computer Programming},
  volume    = {1},
  edition   = {3},
  year      = {1997},
  publisher = {Addison-Wesley}
}
```

> ✅ Use short, lowercase citation keys like `knuth1997` or `hoare1969`.

### 2. Cite sources in Markdown

Use the following syntax to reference an entry from `references.bib`:

```markdown
Algorithms are fundamental to computer science [@knuth1997].
```

When the site builds, this will render as:

> Algorithms are fundamental to computer science [1].

and the corresponding citation will appear in a **References** section at the bottom of the page.

### 3. Display the references section

Include this heading at the bottom of your page to define where citations appear:

```markdown
## References
```

If you don’t include this heading, the reference list will automatically appear at the end of the page.

### 4. How references are displayed

Each citation will be automatically formatted in **IEEE style**, for example:

```text
[1] D. E. Knuth, *The Art of Computer Programming*, Vol. 1, 3rd ed. Addison-Wesley, 1997.
```

## How to Contribute
Contributions from everyone are welcome!
If you have:

* Lecture notes
* Clarifications or improved explanations
* Code examples or visual aids
* References to add

Please submit them through a **Pull Request (PR)** or **GitHub Issue**.

When contributing:

1. Follow the IEEE referencing guidelines above.
2. Check existing `.bib` entries before adding duplicates.
3. Keep notes concise and focused on key learning outcomes.
4. Use clear Markdown headings and consistent formatting.

Any PR which does not meet these requirements, nor follow the outlined contribution processes will be denied until fixed.
---

## 🧭 Example Workflow

1. **Fork** this repository.
2. **Create** a new branch for your update.
3. **Edit or add** a `.md` file in the correct folder (e.g. `level-3/core-topics/`).
4. **Add new references** to `docs/references.bib` if needed.
5. **Cite** them in your text with `[@citationkey]`.
6. **Commit** and open a Pull Request.

Please note, references using the previous method are **not required** as long as you have listed sources at the bottom of any document you have created or modified.