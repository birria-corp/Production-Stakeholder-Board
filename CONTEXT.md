# Claude Session Context — SKT DPS Apps
> Paste as first message in a new chat (or store as Project Document) to resume immediately.

---

## Who I Am
- **Name:** Grandmaster (Spencer Thompson)
- **Role:** Data Product Owner
- **GitHub account:** `spencer-thompson-2-vu`
- **Goal:** Build and maintain lightweight single-file HTML apps hosted on GitHub Pages — no server, no infrastructure
- **Claude goes by:** Fez

---

## Active Products

### 1. Production Stakeholder Board
- **Repo:** `https://github.com/spencer-thompson-2-vu/Production-Stakeholder-Board`
- **Live URL:** `https://spencer-thompson-2-vu.github.io/Production-Stakeholder-Board`
- **Current version:** v2.2
- **Files:** `index.html`, `version.json`, `README.md`, `CONTEXT.md`
- **Stack:** Single-file HTML, React 18 via Babel standalone, localStorage

**Key features:**
- Two-zone priority stack: Completed This Cycle (collapsible) + Active Priority
- Completed items sorted oldest→newest at top, no strikethrough, green left border
- Active items drag-to-reorder; click row body opens drawer; reorder propagates to bucket columns
- Priority stack rows show due date badge inline if set
- Bucket columns: In Progress / Up Next / On Horizon; click card anywhere to open drawer
- Card drawer: title, bucket, priority, owner combo, due date, tag chips, progress slider (In Progress only), current status summary, append-only change log
- Progress slider: 10-cell segmented yellow→green bar, inline on stack row and bucket card, no percentage label
- Sections below buckets: Completed, Purgatory, Completed Archive (collapsed), general Archive
- Auto-archive completed items after 30 days
- Meeting panel: attendee list, date, notes, Complete Meeting copies summary + clears completed from stack
- Copy for Slack: groups active stack by bucket with emoji headers, bracket priority labels [High], due date if set, header includes M/D/YY date
- Topbar: A−/A+ font scaling, v{VERSION}, Update, Export, Import, Copy for Slack
- Auto-export JSON if no export in last 4 days

### 2. Spencer Action Items
- **Repo:** `https://github.com/spencer-thompson-2-vu/Spencer-Action-Items`
- **Live URL:** `https://spencer-thompson-2-vu.github.io/Spencer-Action-Items`
- **Current version:** v1.4
- **Files:** `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `version.json`, `README.md`, `CONTEXT.md`
- **Stack:** Single-file HTML, React 18 via Babel standalone, localStorage, PWA with service worker

**Key features:**
- Active tasks sorted: overdue first → today → future → no date
- Stoplight due date badges: red (overdue), yellow (today), green (future), gray (none)
- Completed rows show completion date in plain light gray
- Inline +1/+7 yellow bump buttons on active task rows (business days)
- Task drawer: text, due date + quick date buttons, notes field, Mark Complete / Reopen
- Topbar: A−/A+ font scaling, overdue count badge, version, Export, Import
- Auto-export JSON if no export in last 4 days
- PWA: manifest + sw.js for Android home screen install and offline use
- SKT icon: S/K/T letters in red/yellow/green circles on dark background
- Service worker: network-first for HTML/version.json, cache-first for assets, auto-purges old cache on version bump

---

## Key Technical Decisions

### Font Scaling
- Use `document.documentElement.style.fontSize = VALUE + '%'`
- Steps: [75, 85, 92, 100, 108, 116, 125] — default index 3 (100%)

### Version Bumping
Stakeholder Board — 2 files: `APP_VERSION` in index.html + version.json
Spencer Action Items — 3 files: `APP_VERSION` in index.html + `CACHE_VERSION` in sw.js + version.json

### GitHub Desktop Workflow
1. Pull origin before starting
2. Copy files into local repo folder
3. Commit with version message
4. Push origin

---

## Packaging Convention
- Zip name: `Product-Name-vX.X.zip`
- Every package includes updated `CONTEXT.md`
- Stakeholder Board: `index.html`, `version.json`, `README.md`, `CONTEXT.md`
- Spencer Action Items: `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `version.json`, `README.md`, `CONTEXT.md`

---

## Version History

### Production Stakeholder Board
| Version | Changes |
|---------|---------|
| v2.2 | Card In Backlog blue dot indicator on stack rows and bucket cards; checkbox in drawer |
| v2.1 | New app icon, favicon |
| v2.0 | Due date badge on stack rows; click-to-open rows and bucket cards; due date in Slack copy |
| v1.9 | Copy for Slack: date header (M/D/YY) |
| v1.8 | Copy for Slack: bracket priority labels |
| v1.7 | Copy for Slack button |
| v1.6 | Font scaling fix |
| v1.5 | Version bump pipeline verify |
| v1.4 | A−/A+ font toggle, Update button |
| v1.3 | Segmented progress bar |
| v1.2 | Click-to-open, progress slider, tag/owner combo |
| v1.1 | Two-zone stack, Purgatory, Archive, auto-export |
| v1.0 | Initial release |

### Spencer Action Items
| Version | Changes |
|---------|---------|
| v1.4 | Font scaling fix |
| v1.3 | Version bump pipeline verify |
| v1.2 | A−/A+ scaling, +1/+7 bump buttons, completed date |
| v1.0 | Initial release |
