# Snowflake CoWork – Nedbank Branding

Replaces the Snowflake CoWork logo with the Nedbank logo on [ai.snowflake.com](https://ai.snowflake.com). Auto-updates whenever a new version is pushed.

---

## Install (colleagues)

1. **Install Tampermonkey** from your browser's extension store:
   - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. **Click the install link:**
   [https://raw.githubusercontent.com/jaderiley/nedbank-snowflake-branding/main/nedbank-branding.user.js](https://raw.githubusercontent.com/jaderiley/nedbank-snowflake-branding/main/nedbank-branding.user.js)

3. A Tampermonkey tab opens — click **Install**.

4. Refresh [ai.snowflake.com](https://ai.snowflake.com). The Nedbank logo appears in the top-left nav.

The script auto-updates in the background whenever a new version is published — no action needed on your end.

---

## Pushing an update (Jade)

1. Edit `nedbank-branding.user.js`.
2. Bump `@version` in the `==UserScript==` header (e.g. `1.0.0` → `1.1.0`).
3. Commit and push to `main`.

Tampermonkey checks the `@updateURL` on each browser session and silently updates for all installed users.
