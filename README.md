# Production Stakeholder Board

> A stakeholder request tracker for Data Product Owners. Maintains a drag-ordered priority stack, active work buckets, meeting mode with attendee management, and a clipboard-ready meeting summary. Runs entirely in the browser — no server, no account required.

**Live app:** `https://spencer-thompson-2-vu.github.io/Production-Stakeholder-Board`
**Current version:** v1.0

---

## Features

### Priority Stack
- Unified drag-to-reorder list across all active buckets (New Asks, Up Next, In Progress, On Horizon)
- Completed items stay in the stack until a meeting is closed
- Quick-add row at the bottom — type a title, pick a bucket, and it lands at the bottom of the stack
- Reordering here also reorders cards within their bucket column

### Active Buckets
- Three columns: **In Progress**, **Up Next**, **On Horizon**
- Card rank mirrors the priority stack order
- Add items directly to any column

### Card Detail Drawer
- Title, bucket, priority, owner, due date, tags
- **Current Status / Summary** — freetext field shown on the card face
- **Change Log** — append-only timestamped entries for criteria shifts and multi-step updates
- **Complete** button — moves card to Completed and flags it as pending meeting close
- **Archive** button — de-prioritizes without deleting

### Completed
- Completed items display below the active buckets
- Auto-archive after 30 days
- Remain in the priority stack until a meeting is closed

### Meeting Mode (bottom panel)
- Persistent attendee list — add names once, click to select per meeting
- Date field and freetext meeting notes
- **Complete Meeting & Copy Summary** — copies full priority stack + attendees + notes to clipboard, then removes completed items from the stack

### Data
- All state persists in `localStorage` automatically
- **Export JSON** — downloads a timestamped backup of all items
- **Import JSON** — restore from any previous export (with validation and confirmation)
- **↻ Update** — checks `version.json` on GitHub and prompts to reload if a newer version exists

---

## File Structure

```
/
├── index.html      ← Entire application
├── version.json    ← Current version string (read by Update check)
└── README.md       ← This file
```

---

## Updating (pushing a new release)

1. Make changes to `index.html`
2. Bump `APP_VERSION` at the top of the script block — e.g. `'1.0'` → `'1.1'`
3. Update `version.json` to match: `{ "version": "1.1" }`
4. Commit both files with a descriptive message — e.g. `v1.1 — add tag filter to priority stack`
5. GitHub Pages redeploys in ~60 seconds
6. Open the live app → click **↻ Update** to get the new version

---

## Version History

| Version | Changes |
|---------|---------|
| v1.0 | Initial release — priority stack, active buckets, meeting mode, export/import |
