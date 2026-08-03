# Production Stakeholder Board

Single-file HTML stakeholder priority tracker. No server, no dependencies beyond CDN-loaded React 18 + Babel.

**Live:** https://spencer-thompson-2-vu.github.io/Production-Stakeholder-Board

---

## Features

- **Priority Stack** — drag-to-reorder active items across all buckets
- **Bucket Columns** — In Progress / Up Next / On Horizon
- **Card Drawer** — title, bucket, priority, owner, due date, tags, progress slider, append-only change log
- **Copy for Slack** — one-click copy of priority list grouped by bucket, formatted for Slack markdown
- **Meeting Panel** — attendees, date, notes; Complete Meeting copies summary + clears completed from stack
- **Completed / Purgatory / Archive** — auto-archive completed items after 30 days
- **Font scaling** — A− / A+ persisted to localStorage
- **Export / Import** — JSON backup; auto-export if no export in last 4 days
- **Update check** — ↻ button compares against version.json

---

## Version History

| Version | Changes |
|---------|---------|
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
