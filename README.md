# Production Stakeholder Board

> A stakeholder request tracker for Data Product Owners. Maintains a drag-ordered priority stack, active work buckets, meeting mode with attendee management, and a clipboard-ready meeting summary. Runs entirely in the browser — no server, no account required.

**Live app:** `https://spencer-thompson-2-vu.github.io/Production-Stakeholder-Board`  
**Current version:** v1.4

---

## Features

### Priority Stack
- Unified drag-to-reorder list across all active buckets (New Asks, Up Next, In Progress, On Horizon)
- Two-zone layout: **✓ Completed This Cycle** at top (collapsible), **Active Priority** below
- Completed items sorted oldest→newest at top until meeting is closed
- No strikethrough — completed rows render identically to active rows with a green left border
- Quick-add row at the bottom — type a title, pick a bucket, lands at end of stack
- Reordering here also reorders cards within their bucket column

### Active Buckets
- Three columns: **In Progress**, **Up Next**, **On Horizon**
- Card rank mirrors priority stack order
- Add items directly to any column

### Card Detail Drawer
- Title, bucket, priority, owner (searchable combo), due date, tags (chip-based multi-select)
- **Bucket options:** Completed · In Progress · Up Next · On Horizon · Purgatory
- **Progress slider** (In Progress only) — 0–100% shown as a 10-cell yellow→green segmented bar on stack rows and bucket cards
- **Current Status / Summary** — freetext shown on card face
- **Change Log** — append-only timestamped entries for criteria shifts and multi-step updates
- **Complete** — moves card to Completed, flags for meeting close
- **Archive** — general de-prioritization archive
- **C-Archive** — completed item archive

### Buckets Below Active
- **Completed** — pending meeting close or within 30 days; auto-archives to Completed Archive after 30 days
- **Purgatory** — de-prioritized items not yet completed
- **Completed Archive** — collapsed by default, expandable

### Meeting Mode (bottom panel)
- Persistent attendee list — add names once, click to select per meeting
- Date field and freetext meeting notes
- **Complete Meeting & Copy Summary** — copies full priority stack + attendees + notes to clipboard, removes completed items from stack

### Font Size
**A−** / **A+** buttons in the topbar adjust font size across 6 steps (85%–125%). Preference persists in localStorage.

### Data
- All state persists in `localStorage` automatically
- **⬇ Export** — downloads a timestamped JSON backup
- **⬆ Import** — restore from any previous export (with validation)
- **Auto-export** — silently downloads a backup on page load if no export in the last 4 days
- **↻ Update** — checks `version.json` on GitHub and prompts to reload if newer version exists

---

## File Structure

```
/
├── index.html      ← Entire application (deploy as index.html)
├── version.json    ← Current version string (read by update check)
└── README.md       ← This file
```

---

## Updating (pushing a new release)

1. Make changes to `index.html`
2. Bump `APP_VERSION` in the script block
3. Update `version.json` to match: `{ "version": "X.X" }`
4. Commit both files — e.g. `v1.5 — add tag filter`
5. GitHub Pages redeploys in ~60 seconds
6. Click **↻ Update** in the topbar to get the new version

---

## Version History

| Version | Changes |
|---------|---------|
| v1.4 | A−/A+ font size toggle · ↻ Update button restored to topbar |
| v1.3 | Segmented 10-cell progress bar (yellow→green gradient) · Bar inline with title on priority stack · No percentage labels · Hover for exact value tooltip |
| v1.2 | Click any card/row to open drawer · Progress slider on In Progress cards · Tag combo with chip selection · Owner combo with searchable existing owners |
| v1.1 | Two-zone priority stack · Purgatory bucket · Completed Archive · Bucket dropdown includes Completed and Purgatory · Auto-export backup after 4 days · Version check button |
| v1.0 | Initial release — priority stack, active buckets, meeting mode, export/import |
