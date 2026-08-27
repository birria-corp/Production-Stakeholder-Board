# Claude Session Context — Production Stakeholder Board
> Paste as first message in a new chat (or store as Project Document) to resume immediately.

---

## Who I Am
- **Name:** Grandmaster (Spencer Thompson)
- **Role:** Data Product Owner
- **GitHub org:** `birria-corp`
- **Goal:** Build and maintain lightweight single-file HTML apps hosted on GitHub Pages
- **Claude goes by:** Fez

---

## Product

### Production Stakeholder Board
- **Repo:** `https://github.com/birria-corp/Production-Stakeholder-Board`
- **Live URL:** `https://birria-corp.github.io/Production-Stakeholder-Board`
- **Current version:** v3.10
- **Files:** `index.html`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`, `icon-32.png`, `version.json`, `README.md`, `CONTEXT.md`
- **Stack:** Single-file HTML, React 18 via Babel standalone, localStorage, PWA

**Key features:**
- Two-zone priority stack: Completed This Cycle (collapsible) + Active Priority
- Completed items sorted oldest→newest, no strikethrough, green left border
- Active items drag-to-reorder; click row body opens drawer; due date badge (📅) inline
- Bucket columns: In Progress / Up Next / On Horizon; click card anywhere to open drawer
- Card In Backlog: blue dot right of priority badge; checkbox in drawer
- Card drawer: title, bucket, priority, owner combo, due date, tag chips, progress slider (In Progress only), current status summary, append-only change log
- Copy for Slack: groups active stack by bucket (🟠🟡🔵🟣), bracket priority labels [High], due date if set, header: 📋 Priority Stack - as of M/D/YY
- Meeting panel: attendee list, date, notes, Complete Meeting copies summary + clears completed
- Cloud sync: Google sign-in via Firebase Auth (signInWithPopup); Firestore sync for sb_v3 + sb_meeting; conflict prompt on login
- Topbar: 📋 Copy for Slack | ☁ Sign in (signed out) / email + ☁ Sync + Sign out (signed in) | ⚙ Settings
- Settings modal: font scaling (A-/A+), version/update check, Export, Import
- Auto-export JSON if no export in last 4 days
- SW: network-first for index.html/version.json, cache-first for assets, GET-only filter

---

## Key Technical Decisions

### localStorage Keys
- `sb_v3` — main items data (synced to Firestore)
- `sb_meeting` — meeting panel state (synced to Firestore)
- `sb_fontsize` — font preference (local only, never synced)

### Firebase Auth
- Project: `zeptrack-f8720` (display name: birria-corp-apps)
- Firebase Hosting deployed on this project — required for `/__/firebase/init.json` auth handler
- Auth method: `signInWithPopup` — desktop Chrome only, no COOP issues
- Module: `type="module"` ESM imports with explicit `window.*` assignments
- No `setPersistence` — LOCAL (IndexedDB) works fine on desktop Chrome
- No redirect fallback
- Firestore paths: `users/{uid}/data/sb_v3`, `users/{uid}/data/sb_meeting`
- `window._signIn`, `window._signOut`, `window._syncNow` exposed to window
- `window._authUser` + `authChanged` CustomEvent bridges module → React state
- `window._showToast` + `window._reloadAppState` exposed in React useEffect
- `_reloadAppState` reloads both items AND meeting state from localStorage

### Version Bumping (3 files every release)
- `APP_VERSION` in `index.html`
- `CACHE_VERSION` in `sw.js`
- `version.json`

### SW Behavior
- Cache name: `psb-v{CACHE_VERSION}`
- Network-first: `index.html`, `version.json`
- Cache-first: all other assets
- GET-only: `if (e.request.method !== 'GET') return;`
- Auto-purge old cache on activation

### GitHub Deploy
- Upload via GitHub web editor
- After deploy: unregister SW (Application → Service Workers → Unregister) + hard refresh (Ctrl+Shift+R)

### Known Pitfalls
- Unicode minus (`−`) or HTML entities (`&#x2212;`) in JSX button text cause silent Babel compilation failure — use plain ASCII `A-`
- Firebase Auth requires Firebase Hosting to be deployed on the project — `/__/firebase/init.json` must resolve
- `signInWithRedirect` fails on GitHub Pages due to COOP + IndexedDB — always use `signInWithPopup` on desktop
- `type="module"` scope: all functions used by HTML onclick must be explicitly assigned to `window` inside the module

---

## Version History

| Version | Changes |
|---------|---------|
| v3.10 | Fix Settings modal overlay CSS class mismatch (font buttons now work) |
| v3.9 | Fix _reloadAppState to reload meeting state after cloud sync |
| v3.8 | Fix font size buttons (Unicode minus broke Babel compilation) |
| v3.7 | Move auth to topbar; settings modal for Export/Import/Font/Update |
| v3.6 | Switch to zeptrack Firebase project; ESM module; popup auth |
| v2.3 | Remove strikethrough on completed stack rows |
| v2.2 | Card In Backlog blue dot indicator |
| v2.1 | New app icon, favicon |
| v2.0 | Due date badge on stack rows; click-to-open; due date in Slack copy |
| v1.9 | Copy for Slack: date header |
| v1.8 | Copy for Slack: bracket priority labels |
| v1.7 | Copy for Slack button |
| v1.0 | Initial release |
