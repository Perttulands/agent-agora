# Changelog

All notable changes to Agent Agora.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

## [Unreleased]

## [2026-02-20]

### Added
- Sticky navigation bar that appears when scrolling past the hero section, with links to major sections.
- "The Stack" section covering the technical infrastructure (tmux, systemd, Git, Claude+Codex, filesystem I/O, Bash+Go).
- Twitter Card and Open Graph image meta tags for social sharing previews.
- Focus-visible styles for keyboard navigation accessibility.
- Semantic HTML: `<nav>`, `<main>`, `<footer>`, ARIA labels on key landmarks.

### Changed
- Section ordering: Characters section now uses warm background, Real Talk is neutral, Get Started is warm, Invitation is neutral. Better visual rhythm.
- README: mythology-forward rewrite — each README now reads like discovering a character in a world

### Added
- "For Agents" section in README: install, what-this-is, and runtime usage for agent consumers

### Changed
- Upgraded character banner images: Argus, Truthsayer, Oathkeeper, Relay, Athena Web, and Ludus Magnus now use dedicated banner artwork (banner-*.jpg)
- Added character sigils (from images/sigils/) next to every character heading for visual identity
- Added `.sigil` CSS class with proper sizing, alignment, and drop-shadow

### Added
- Initial site from forge-site (index.html, style.css, script.js)
- Image assets for all Agora characters
- AGENTS.md with changelog ground rule
