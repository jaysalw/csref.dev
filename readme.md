# csref.dev

Collaborative notes and references from **BSc (Hons) Computer Science** undergraduate studies.
This repository gathers summaries, explanations, and key concepts from various modules and topics, contributed by multiple students.

These notes will develop and more content will be added as time goes on, and as I progress through this course.

[![GitHub Repo stars](https://img.shields.io/github/stars/jaysalw/csref.dev?style=for-the-badge&logo=github)](https://github.com/jaysalw/csref.dev/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/jaysalw/csref.dev?style=for-the-badge)](https://github.com/jaysalw/csref.dev/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/jaysalw/csref.dev?style=for-the-badge&logo=git)](https://github.com/jaysalw/csref.dev/commits/main)
[![License](https://img.shields.io/github/license/jaysalw/csref.dev?style=for-the-badge)](https://github.com/jaysalw/csref.dev/blob/main/LICENSE)

---

## 🧩 Contents

* Notes on core computer science subjects
* Summaries of lectures, readings, and key papers
* Code snippets and practical examples
* Study tips and exam preparation materials
* References formatted using the **IEEE citation style**

---

## 🚀 Usage

1. **Browse** the folders by level, module, or topic.
2. **Open** Markdown files (`.md`) for clear explanations and code samples.
3. **Use** embedded references and examples for revision or further study.
4. **Citations** are numbered `[1]`, `[2]`, etc., using the IEEE referencing system.
   Reference lists appear automatically at the bottom of each page.

---

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

---

### 2. Cite sources in Markdown

Use the following syntax to reference an entry from `references.bib`:

```markdown
Algorithms are fundamental to computer science [@knuth1997].
```

When the site builds, this will render as:

> Algorithms are fundamental to computer science [1].

and the corresponding citation will appear in a **References** section at the bottom of the page.

---

### 3. Display the references section

Include this heading at the bottom of your page to define where citations appear:

```markdown
## References
```

If you don’t include this heading, the reference list will automatically appear at the end of the page.

---

### 4. How references are displayed

Each citation will be automatically formatted in **IEEE style**, for example:

```text
[1] D. E. Knuth, *The Art of Computer Programming*, Vol. 1, 3rd ed. Addison-Wesley, 1997.
```

---

## 🧱 Configuration Summary

The site uses the `mkdocs-bibtex` plugin for citation rendering.

Excerpt from `mkdocs.yml`:

```yaml
plugins:
  - bibtex:
      bib_file: docs/references.bib
      cite_style: ieee
      cited_only: true
```

This ensures:

* Citations use **IEEE** format.
* Only **cited** sources appear per page.
* References are automatically generated at build time.

---

## 🤝 Contributing

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

---

## 📄 License

All content is shared under the **Unlicense** unless otherwise stated.
Contributors retain authorship of their own submissions.

