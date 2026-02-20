# Changelog

All notable changes to Agent Agora.

Format: [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)

## [Unreleased]

### Added
- Initial landing page (index.html, style.css, script.js) migrated from forge-site:
  - Scroll progress bar and scroll-reveal fade-in animations
  - Hero owl click easter egg with rotating personality messages
  - Konami code easter egg with golden rain effect
  - Copy buttons on code blocks
  - Console greeting for devs who look
- Image assets for all Agora characters (argus, athena, learning-loop, ludus-magnus, oathkeeper, orchestration, pantheon, relay, system-layers, truthsayer)
- IMAGE-PROMPTS.md: AI generation prompts and style anchors for all character illustrations and sigil icons
- AGENTS.md: ground rules for agents working in this repo (changelog requirement, trash over rm, no forced git rewrites)
- Character banner images for Argus, Athena Web, Ludus Magnus, Oathkeeper, Relay, and Truthsayer (`images/banner-*.jpg`)
- Sigil icon set in `images/sigils/` — 14 character sigils (PNG) for use in headings and UI
- "For Agents" section in README: install guide, what-this-is, and runtime usage for agent consumers

### Changed
- Character cards: Argus, Truthsayer, Oathkeeper, Relay, Athena Web, and Ludus Magnus now use dedicated banner artwork instead of shared placeholder images
- Character headings: sigil icons added next to all character names for visual identity
- CSS: added `.sigil` class with sizing, alignment, and drop-shadow
- README: mythology-forward rewrite (three revisions) — concise, voice-forward, reads as discovering a world rather than a product page
