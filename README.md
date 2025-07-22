<h1 align="center">
WTF Is This File?
</h1>
<p align="center">
🔍 Instantly explain the mysterious files in your codebase.
<p>
<p align="center">
  <a href="https://www.npmjs.com/package/wtf-file"><img src="https://img.shields.io/npm/v/wtf-file?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/wtf-file"><img src="https://img.shields.io/npm/dw/wtf-file?style=for-the-badge"></a>
  <a href="https://www.npmjs.com/package/wtf-file"><img src="https://img.shields.io/npm/last-update/wtf-file?style=for-the-badge"></a>  
<p>

---

## 🤔 What is this?

Ever cloned a repo and wondered what `.nvmrc`, `.browserslistrc`, or `.editorconfig` actually do?

**`wtf`** is a zero-config CLI tool that tells you exactly what these files are, in plain English, right from your terminal.

```bash
npx wtf .nvmrc
# => WTF is .nvmrc
# => → Specifies the Node.js version. Used by nvm to automatically switch versions.
# => Want to know more? https://github.com/nvm-sh/nvm

npx wtf
# => Auto-detects files in your project root and explains them.
```

---

## 🚀 Features

* 🔎 **Explains config files** like `.nvmrc`, `.editorconfig`, `.prettierrc`, `.eslintrc`, etc.
* 🤠 **Human-readable summaries** — no jargon or copy-pasting to Google.
* ⚡ **Instant answers** — no API keys, no setup, just run and learn.
* 📁 **Auto-scan mode** — run `wtf` with no args to scan the whole directory.
* 🧹 **Extensible database** — contribute your own explanations via PRs.

---

## Installation

You don’t even have to install it!

### Run directly:

```bash
npx wtf
```

### Or install globally:

```bash
npm install -g wtf-file
wtf
```

---

## Examples

```bash
wtf .editorconfig
# => WTF is .editorconfig
# => → Defines editor settings like indentation and line endings. Helps maintain consistent code style.
# => Want to know more? https://editorconfig.org/

wtf .gitignore
# => WTF is .gitignore
# => → Lists files and directories Git should ignore.
# => Want to know more? https://git-scm.com/docs/gitignore

wtf .browserslistrc
# => WTF is .browserslistrc
# => → Specifies target browser versions for frontend tools like Babel, Autoprefixer, etc.
# => Want to know more? https://browsersl.ist/
```

---

## Supported Files (Partial List)

* `.nvmrc`
* `.editorconfig`
* `.eslintrc`
* `.prettierrc`
* `.gitignore`
* `.browserslistrc`
* `tsconfig.json`
* `package-lock.json`
* `.env`
* and many more, [see →](data/wtf.json)
* want to [add more? →](#contributing)

---

## Why?

> Because you shouldn't need to Google every weird file you see.

This tool is for:

- Beginners wondering "WTF is this file?"
- Experienced devs auditing unfamiliar repos
- Educators teaching tooling or DevOps

---

## Contributing

Want to add explanations for more files?

1. Fork the repo
2. Add your file, description and url (if possible) in [`wtf.json`](./wtf.json)
3. Open a PR, it’s that easy.

---

## License

MIT — because WTF would it be anything else?

---

**Made with ❤️ by [hxpe](https://github.com/hxpe-dev)**
