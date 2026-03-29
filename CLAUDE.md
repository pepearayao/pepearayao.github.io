# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website hosted on GitHub Pages, built as an interactive terminal emulator. Visitors type Unix-like commands to learn about Pepe Araya, view social links, and download a resume. No build process, no dependencies — pure HTML/CSS/JavaScript.

## Architecture

The terminal works via a hidden `<textarea>` that captures keyboard input. As the user types, `typeIt()` in `caret.js` mirrors the text into a visible `<span id="typer">`. On Enter, `enterKey()` in `main.js` pushes the command to a history array and routes it through `commander()` — a switch statement that either renders output to the terminal or opens external links.

**Rendering pipeline:** `commander()` → `loopLines()` (multi-line with staggered animation) or `addLine()` (single line) → inserts `<p>` elements before the `#before` anchor in `#terminal`.

**Key globals in `main.js`:**
- `commands[]` — command history (navigable with Up/Down arrows)
- `git` — current history index
- `pw`/`pwd` — password mode state for the "secret" easter egg (password: "42")

**Mobile support:** `isMobile` flag (width ≤ 768px) switches to a compact banner, adds quick-command buttons, and uses container scrolling instead of window scrolling.

## Development

```bash
open index.html                    # Quick test
python3 -m http.server 8000       # Local server at http://localhost:8000
```

Deployment is automatic — push to `main` and GitHub Pages deploys. Custom domain configured via `CNAME`.

## Adding New Commands

1. Add response data to `js/commands.js` (array of strings with HTML)
2. Add a `case` to `commander()` in `js/main.js:83`
3. Use `loopLines(data, "color2 margin", 80)` for multi-line or `addLine(text, "color2", 80)` for single line
4. For external links: `newTab(url)`
5. Add entry to the `help` array in `js/commands.js` for discoverability

## Key Hardcoded Values

- Social URLs: `js/commands.js:1-7`
- Easter egg password: `"42"` (`js/main.js:40`)
- Resume path: `assets/pepe_araya_resume.pdf` (`js/main.js:166`)
- Terminal prompt: `visitor@pepearayao.com:~$` (`css/style.css`)
- Color scheme: green `#519975` on dark brown `#211D1B`
