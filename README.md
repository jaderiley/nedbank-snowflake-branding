# Snowflake CoWork – Nedbank Branding

A Tampermonkey userscript that replaces the Snowflake CoWork logo with the Nedbank logo on `ai.snowflake.com`, and hides the logo when the sidebar is collapsed.

---

## Install (one-time setup)

### Step 1 — Install Tampermonkey

Install the Tampermonkey browser extension from your browser's official store:

- **Chrome:** https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
- **Edge:** https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd
- **Firefox:** https://addons.mozilla.org/firefox/addon/tampermonkey/
- **Brave / Opera:** use the Chrome link above (both support Chrome extensions)

### Step 2 — Chrome & Edge users only: enable "Allow User Scripts"

**This step is required on Chrome and Edge, or the script will not run.**

1. Go to `chrome://extensions` (or `edge://extensions` on Edge)
2. Find **Tampermonkey** and click **Details**
3. Scroll down and turn on **"Allow User Scripts"**

(Firefox and Brave do not need this step.)

### Step 3 — Install the script

Open this link in your browser:

```
https://raw.githubusercontent.com/jaderiley/nedbank-snowflake-branding/main/nedbank-branding.user.js
```

Tampermonkey will open an install screen — click **Install**.

### Done

Visit `ai.snowflake.com` — the Nedbank logo should appear in place of the Snowflake logo. You never need to reinstall; updates arrive automatically.

---

## It's not working?

1. **Hard-refresh** the Snowflake page: `Ctrl+Shift+R`
2. **Chrome/Edge:** double-check **"Allow User Scripts"** is enabled (Step 2 above) — this is the most common cause
3. Click the Tampermonkey icon and confirm **"Snowflake CoWork – Nedbank Branding"** is listed and enabled (green)
4. Still stuck? Open DevTools (F12) → Console and run:
   ```javascript
   console.log('logo present:', !!document.querySelector('img.nedbank-logo'));
   ```
   - `true` = script is running (likely a display quirk, refresh)
   - `false` = script isn't executing (recheck Steps 2 & 3)

---

## For maintainers: pushing an update

Everyone auto-updates from this repo. To push a change:

1. Edit `nedbank-branding.user.js`
2. **Bump the `@version` number** in the header (e.g. `4.1.0` → `4.1.1`) — **this is mandatory; updates will not propagate without it**
3. Commit and push to `main`

Tampermonkey checks for updates automatically (~daily). Users can force an immediate update via the Tampermonkey icon → "Check for userscript updates".
