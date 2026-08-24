# Production Stakeholder Board

Single-file HTML stakeholder priority tracker. No server, no dependencies beyond CDN-loaded React 18 + Babel.

**Live:** https://spencer-thompson-2-vu.github.io/Production-Stakeholder-Board

---

## Features

- **Priority Stack** — drag-to-reorder active items; click row body to open drawer; due date badge and blue backlog dot shown inline
- **Bucket Columns** — In Progress / Up Next / On Horizon; click card to open drawer
- **Card Drawer** — title, bucket, priority, owner, due date, tags, progress slider, append-only change log
- **Copy for Slack** — one-click copy grouped by bucket with date header, priority labels, and due dates
- **Meeting Panel** — attendees, date, notes; Complete Meeting copies summary + clears completed from stack
- **Completed / Purgatory / Archive** — auto-archive completed items after 30 days
- **Font scaling** — A− / A+ persisted to localStorage
- **Cloud Sync** — Google sign-in via Firebase Auth; Firestore sync for `sb_v3` and `sb_meeting`; conflict prompt on login; ☁ Sync button in topbar
- **Update check** — ↻ button compares against version.json

---

## Version History

| Version | Changes |
|---------|---------|
| v2.4 | Firebase Auth + Firestore cloud sync; Google sign-in banner; ☁ Sync button in topbar |
| v2.3 | Remove strikethrough on completed stack rows |
| v2.2 | Card In Backlog blue dot indicator on stack rows and bucket cards; checkbox in drawer |
| v2.1 | New app icon, favicon |
| v2.0 | Due date badge on stack rows; click-to-open rows and bucket cards; due date in Slack copy |
| v1.9 | Copy for Slack: date header (M/D/YY) |
| v1.8 | Copy for Slack: bracket priority labels [High], [Medium], etc. |
| v1.7 | Copy for Slack button — grouped by bucket with color emoji headers and priority tags |
| v1.6 | Font scaling fix — use % on documentElement |
| v1.5 | Version bump to verify deployment pipeline |
| v1.4 | A−/A+ font size toggle, ↻ Update button in topbar |
| v1.3 | Segmented 10-cell progress bar (yellow→green), inline on stack row, no % label |
| v1.2 | Click any card/row to open drawer, progress slider, tag combo, owner combo |
| v1.1 | Two-zone priority stack, Purgatory, Completed Archive, auto-export after 4 days |
| v1.0 | Initial release |

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Full app — React 18 via Babel standalone, all CSS + JS inline |
| `version.json` | Remote version string for update check |
| `README.md` | This file |
| `CONTEXT.md` | Session context for resuming work in Claude |

---

## Deploy

GitHub Pages — push to `main`, Pages serves from root. No build step.
