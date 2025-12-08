# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website hosted on GitHub Pages that presents itself as an interactive terminal emulator. The site mimics a Unix-like terminal interface where visitors can type commands to learn about Pepe Araya, view social links, and download a resume.

## Architecture

### Core Components

The application is built with vanilla JavaScript and follows a simple three-layer architecture:

1. **Presentation Layer** (`index.html`)
   - Single-page application with a terminal-style interface
   - Hidden textarea captures keyboard input while displaying styled output
   - DOM structure: `#terminal` (output area), `#command` (input area), `#texter` (hidden textarea), `#liner` (prompt display)

2. **Command Processing** (`js/main.js`)
   - Entry point that initializes the terminal and displays the banner
   - `commander()` function: Switch statement routing commands to handlers (js/main.js:74)
   - `enterKey()`: Handles keyboard events including Enter (execute), Up/Down arrows (history navigation)
   - `addLine()` and `loopLines()`: Core rendering functions that add content to the terminal with typing animations
   - Password easter egg system: "secret" command enables password mode, correct answer unlocks hidden content

3. **Data Layer** (`js/commands.js`)
   - Defines all command responses as arrays of strings
   - Contains social media links, about text, help menu, and ASCII art banner
   - `whois`: Professional bio and background
   - `help`: Available commands list
   - `banner`: ASCII art header with branding

4. **Utility Layer** (`js/caret.js`)
   - Manages cursor positioning and visual effects
   - `typeIt()`: Updates display based on textarea input
   - `moveIt()`: Handles left/right arrow key cursor movement

5. **Styling** (`css/style.css`)
   - Terminal color scheme: green (#519975) on dark brown (#211D1B)
   - Typing animation using CSS keyframes
   - Blinking cursor effect
   - Responsive terminal prompt styling

### Key Interactions

- User types in hidden textarea → `typeIt()` updates visible `#typer` span
- Enter key → `commander()` processes command → `addLine()` or `loopLines()` renders output
- Special commands like "sudo" trigger external actions (opens YouTube Rick Roll)
- "secret" command + password "42" reveals hidden easter egg content
- Social commands ("twitter", "github", etc.) open new tabs via `newTab()`

## Development

### Testing Locally

Since this is a static site, simply open `index.html` in a browser:
```bash
open index.html
```

Or use a local server for a more production-like environment:
```bash
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Deployment

This site is hosted on GitHub Pages. Changes pushed to the `main` branch are automatically deployed. The `CNAME` file configures the custom domain.

### Adding New Commands

1. Add command data to `js/commands.js` (if it requires text output)
2. Add case statement to `commander()` switch in `js/main.js:74`
3. Use `loopLines()` for multi-line animated output or `addLine()` for single lines
4. Use `newTab()` for external links
5. Add command to `help` array in `js/commands.js` for discoverability

### File Structure

```
.
├── index.html          # Main HTML structure
├── css/
│   └── style.css      # Terminal styling and animations
├── js/
│   ├── main.js        # Command processing and event handling
│   ├── commands.js    # Command definitions and content
│   └── caret.js       # Cursor utilities
├── assets/
│   └── pepe_araya_resume.pdf  # Downloadable resume
└── CNAME              # GitHub Pages custom domain configuration
```

## Technical Considerations

- No build process required - pure HTML/CSS/JavaScript
- No external dependencies or frameworks
- Password for easter egg is hardcoded as "42" (js/main.js:31)
- Resume download path is hardcoded (js/main.js:154)
- Social media URLs defined in `js/commands.js:1-7`
- Terminal prompt format: `visitor@pepearayao.com:~$` (css/style.css:64)
