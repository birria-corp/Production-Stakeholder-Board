# Production Stakeholder Board

Stakeholder priority tracker with cloud sync via Firebase Auth + Firestore.

**Live:** https://birria-corp.github.io/Production-Stakeholder-Board

## Features

- **Priority Stack** — drag-to-reorder active items; click row body to open drawer; due date badge and blue backlog dot shown inline
- **Bucket Columns** — In Progress / Up Next / On Horizon; click card to open drawer
- **Card Drawer** — title, bucket, priority, owner, due date, tags, progress slider, append-only change log
- **Card In Backlog** — blue dot indicator on stack rows and bucket cards; checkbox in drawer
- **Copy for Slack** — one-click copy grouped by bucket with date header, priority labels, due dates
- **Meeting Panel** — attendees, date, notes; Complete Meeting copies summary + clears completed from stack
- **Completed / Purgatory / Archive** — auto-archive completed items after 30 days
- **Cloud sync** — Google sign-in via Firebase Auth; Firestore sync for sb_v3 and sb_meeting
- **Topbar** — 📋 Copy for Slack; ☁ Sign in / email + ☁ Sync + Sign out; ⚙ Settings
- **Settings modal** — font scaling (A-/A+), version check, export, import
- **PWA** — manifest.json + sw.js; network-first for HTML/version.json; GET-only filter
- Auto-export JSON if no export in last 4 days

## File Structure

| File | Purpose |
|------|---------|
| `index.html` | Full app — React 18 via Babel standalone, all CSS + JS inline |
| `sw.js` | Service worker — cache busting, GET-only filter |
| `manifest.json` | PWA manifest |
| `version.json` | Remote version string for update check |
| `icon-192.png` | PWA icon |
| `icon-512.png` | PWA icon (large) |
| `icon-32.png` | Favicon |
| `README.md` | This file |
| `CONTEXT.md` | Session context for resuming work in Claude |

## Update Workflow

1. Edit files via GitHub web editor
2. Bump version in all 3 locations: `APP_VERSION` in `index.html`, `CACHE_VERSION` in `sw.js`, `version.json`
3. Unregister SW in browser (Application → Service Workers → Unregister)
4. Hard refresh (Ctrl+Shift+R)

## Firebase Setup

- Project: `zeptrack-f8720` (display: birria-corp-apps)
- Auth: Google sign-in via signInWithPopup — desktop Chrome only
- Firestore paths: `users/{uid}/data/sb_v3`, `users/{uid}/data/sb_meeting`
- `sb_fontsize` stays local only

## Version History

| Version | Changes |
|---------|---------|
| v4.0 | Extend font size steps — add 135%, 146%, 158% |
| v3.10 | Fix Settings modal overlay CSS class mismatch (font buttons now work) |
| v3.9 | Fix _reloadAppState to reload meeting state after cloud sync |
| v3.8 | Fix font size buttons (Unicode minus broke Babel compilation) |
| v3.7 | Move auth to topbar; settings modal for Export/Import/Font/Update |
| v3.6 | Switch to zeptrack Firebase project; ESM module; popup auth |
| v3.5 | setPersistence SESSION attempt (superseded by v3.6) |
| v3.0-3.4 | Firebase auth iteration (redirect, compat SDK, banner timing) |
| v2.9 | Move Firebase scripts to head |
| v2.4-2.8 | Firebase Auth + Firestore iterations |
| v2.3 | Remove strikethrough on completed stack rows |
| v2.2 | Card In Backlog blue dot indicator |
| v2.1 | New app icon, favicon |
| v2.0 | Due date badge on stack rows; click-to-open; due date in Slack copy |
| v1.9 | Copy for Slack: date header |
| v1.8 | Copy for Slack: bracket priority labels |
| v1.7 | Copy for Slack button |
| v1.6 | Font scaling fix |
| v1.0 | Initial release |
