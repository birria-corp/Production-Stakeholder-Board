# Claude Session Context — Spencer Thompson (Grandmaster)
> Paste this file as the first message in a new Claude chat to resume work immediately.

---

## Who I Am
- **Name:** Grandmaster (Spencer Thompson)
- **Role:** Data Product Owner
- **GitHub account:** `spencer-thompson-2-vu`
- **Goal:** Build and maintain lightweight single-file HTML apps hosted on GitHub Pages — no server, no infrastructure

## Communication Style
- Terse, caveman-style responses — drop filler, articles, pleasantries
- Technical substance stays intact
- Call me "Grandmaster", Claude goes by "Fez"
- No questions before building when requirements are clear
- When clarifying questions ARE needed, use the sequential widget UI pattern (one question at a time, pill options, Other field, sendPrompt() on final answer)

---

## Active Products

### 1. Production Stakeholder Board
- **Repo:** `https://github.com/spencer-thompson-2-vu/Production-Stakeholder-Board`
- **Live URL:** `https://spencer-thompson-2-vu.github.io/Production-Stakeholder-Board`
- **Current version:** v2.0
- **Files:** `index.html`, `version.json`, `README.md`, `CONTEXT.md`
- **Stack:** Single-file HTML, React 18 via Babel standalone, localStorage

**Key features:**
- Two-zone priority stack: ✓ Completed This Cycle (collapsible) + Active Priority
- Completed items sorted oldest→newest at top, no strikethrough, green left border
- Active items drag-to-reorder; click row body to open drawer; reorder propagates to bucket columns
- Bucket columns: In Progress / Up Next / On Horizon (left to right); click card anywhere to open drawer
- Priority stack rows show due date badge (📅) inline if set
- Card drawer: title, bucket (Completed/In Progress/Up Next/On Horizon/Purgatory), priority, owner combo, due date, tag chips, progress slider (In Progress only), current status summary, append-only change log
- Progress slider: 10-cell segmented yellow→green bar, shown inline on stack row and bucket card, no percentage label (hover for tooltip)
- Sections below buckets: Completed, Purgatory, Completed Archive (collapsed), general Archive
- Auto-archive completed items to Completed Archive after 30 days
- Meeting panel (bottom bar): persistent attendee list, date, notes, Complete Meeting → copies summary to clipboard + clears completed from stack
- **Copy for Slack** button (topbar, right of Import): copies active priority stack grouped by bucket (In Progress → Up Next → On Horizon → New Ask), with colored emoji bucket headers (🟠🟡🔵🟣), bracket priority labels `[High]`, and due date if set. Header: `📋 Priority Stack - as of M/D/YY`.
- Topbar: A− / A+ font scaling (%, persists to localStorage), v{VERSION}, ↻ Update, ⬇ Export, ⬆ Import, 📋 Copy for Slack
- Auto-export JSON if no export in last 4 days
- Import modal: file picker or paste, validates before replacing

### 2. Spencer Action Items
- **Repo:** `https://github.com/spencer-thompson-2-vu/Spencer-Action-Items`
- **Live URL:** `https://spencer-thompson-2-vu.github.io/Spencer-Action-Items`
- **Current version:** v1.4
- **Files:** `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `version.json`, `README.md`
- **Stack:** Single-file HTML, React 18 via Babel standalone, localStorage, PWA with service worker

**Key features:**
- Active tasks sorted: overdue first → today → future → no date
- Stoplight due date badges: red (overdue), yellow (today), green (future), gray (none)
- Completed rows show completion date in plain light gray (no color badge)
- Inline +1 / +7 yellow bump buttons on active task rows (business days)
- Task drawer: text, due date + quick date buttons (Today/Tomorrow/+1Wk/+2Wks/+1Mo + bump from current date), notes field, Mark Complete / Reopen
- Topbar: A− / A+ font scaling, overdue count badge, v{VERSION}, ↻, ⬇ Export, ⬆ Import
- Auto-export JSON if no export in last 4 days
- PWA: manifest.json + sw.js for Android home screen install and offline use
- SKT icon: Option C — S/K/T letters in red/yellow/green circles on dark background
- Service worker: network-first for HTML/version.json, cache-first for assets, auto-purges old cache on version bump

---

## Key Technical Decisions

### Font Scaling
- Use `document.documentElement.style.fontSize = VALUE + '%'` — percentage avoids circular rem reference
- Steps: `[75, 85, 92, 100, 108, 116, 125]` — default index 3 (100%)
- Apply immediately in fsDown/fsUp handlers AND in a useEffect on mount to restore saved preference
- Preference saved to localStorage

### Version Bumping
**Stakeholder Board** — 2 files every release:
- `APP_VERSION` in `index.html`
- `version.json`

**Spencer Action Items** — 3 files every release:
- `APP_VERSION` in `index.html`
- `CACHE_VERSION` in `sw.js` (must match — forces cache clear on Android)
- `version.json`

### Auto-export Logic
```javascript
// On mount, check if last export was 4+ days ago
const last = localStorage.getItem(LS_EXPORT);
const days = (new Date(today()) - new Date(last)) / (1000*60*60*24);
if (!last || days >= 4) exportData(true); // silent=true
```

### GitHub Desktop Workflow
1. Always **Pull origin** before starting work
2. Copy new files into local repo folder (found via Repository → Show in Explorer)
3. Commit with version message
4. **Push origin**
- Direct web editor edits create remote commits — always Pull before pushing from Desktop or it silently fails

---

## Packaging Convention
- Zip name format: `Product-Name-vX.X.zip`
- Folder inside zip matches zip name
- Every package includes `CONTEXT.md` (this file, updated)
- Stakeholder Board zip: `index.html`, `version.json`, `README.md`, `CONTEXT.md`
- Spencer Action Items zip: `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `version.json`, `README.md`, `CONTEXT.md`

---

## Version History

### Production Stakeholder Board
| Version | Changes |
|---------|---------|
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

### Spencer Action Items
| Version | Changes |
|---------|---------|
| v1.4 | Font scaling fix — use % on documentElement |
| v1.3 | Version bump to verify deployment pipeline |
| v1.2 | A−/A+ font scaling, inline +1/+7 bump buttons, completed date in gray |
| v1.1 | (internal iteration) |
| v1.0 | Initial release — PWA, stoplight dates, notes, drawer, quick dates, export/import |

---

## Reference: ZepTrack
Prior deployed app on same GitHub account — used as original template/reference for this suite. Repo: `https://github.com/spencer-thompson-2-vu/ZepTrack`
