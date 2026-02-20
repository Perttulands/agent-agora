# Code Review — Agent Agora

Quick review of the codebase as of 2026-02-20.

---

## Orphaned Assets

- **6 original character images** are no longer referenced in `index.html` after the banner upgrade (`images/argus.jpg`, `images/ludus-magnus.jpg`, `images/oathkeeper.jpg`, `images/relay.jpg`, `images/truthsayer.jpg`, `images/orchestration.jpg`). The banner variants replaced them but the originals weren't removed.
- **4 sigil PNGs** exist in `images/sigils/` but are not used anywhere in `index.html`: `acropolis.png`, `agora-laurel.png`, `forge-hammers.png`, `split-orb.png`.

## Missing Error Handling

- **`script.js:115`** — `navigator.clipboard.writeText()` has no `.catch()`. If the Clipboard API is unavailable or permission is denied (non-HTTPS, Firefox without focus, etc.), the copy button silently does nothing.

## Deprecated API

- **`script.js:131`** — Konami code uses `e.keyCode`, which is deprecated. Should use `e.key` with named keys (e.g. `'ArrowUp'`, `'ArrowDown'`, `'b'`, `'a'`).

## Docs vs Code Inconsistency

- **"For Agents" section** — CHANGELOG records it was added to README (commit `2979880`), but it is absent from the current README. It was silently dropped during the mythology-forward rewrites (`743a912`, `32471db`) with no CHANGELOG entry for its removal. This violates the AGENTS.md ground rule: "Every user-facing change gets a CHANGELOG.md entry."

## Questionable Links

- **`index.html:193`** — Centurion's character link says `centurion.sh →` but points to `athena-workspace`, not a standalone centurion repo. Fine if centurion lives inside that repo, but potentially confusing — the link text implies a dedicated project.
- **`index.html:383`** — Step 3 installs `openclaw` (`npm install -g openclaw`, linked to `github.com/openclaw/openclaw`). OpenClaw doesn't follow the project's naming conventions and doesn't appear in the cast table in README or the characters section. It's unclear if this is an active/valid dependency.
- **Footer Discord link** — `https://discord.com/invite/clawd` — "clawd" is not obviously this project's Discord server. Worth verifying this is the right invite code.

## Minor Issues

- **`script.js:170–177`** — The `@keyframes sparkFall` animation is injected into `<head>` via JS at page load. It always runs, even on pages where the Konami easter egg is never triggered. Move it to `style.css`.
- **`script.js:23`** — Scroll-reveal stagger uses `i` (index within the IntersectionObserver callback's batch), not document order. Elements that enter the viewport at the same time will animate in batch-arrival order, which may not match visual order.
- **`index.html:8`** — OG tags include `og:title` and `og:description` but no `og:image`. Social previews will have no image.
- **`AGENTS.md:8`** — Hard-codes the current bead ID: `"Current bead: athena-hwq"`. This will be stale immediately after the bead closes. Either remove it or track it elsewhere.
