// ==UserScript==
// @name         Snowflake CoWork – Nedbank Branding
// @namespace    http://tampermonkey.net/
// @version      4.1.0
// @updateURL    https://raw.githubusercontent.com/jaderiley/nedbank-snowflake-branding/main/nedbank-branding.user.js
// @downloadURL  https://raw.githubusercontent.com/jaderiley/nedbank-snowflake-branding/main/nedbank-branding.user.js
// @match        https://ai.snowflake.com/*
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';

  const LOGO = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjYuNSA0OC44IDE3OS43IDgyLjEiPgo8ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCI+CjxwYXRoIGQ9Ik0xNi43NDEgMTI3LjE5OWgtLjIxMWMtMS4wODMgMC0xLjk1NS0uMzU4LTIuNDk0LS45OTItLjUxMy0uNjYzLS43ODQtMi4xMDMtLjg0NC00LjQ0OGwtLjI0LTkuMDE4LjA2LS4wNiAxNC4yNDggMTYuMjNoMi4wNDNjLjA2MS0uMzU5LjA2MS0uNTEuMDYxLS44NzIgMC0uNDgxLS4wNjEtMS4wMjEtLjE0OC0xLjQ3MWwtLjE4Mi0uOTAzYy0uMTItLjYwMS0uMjExLTEuNTkzLS4yMTEtMi4zNDVsLS4xOC05LjUyOHYtLjE4YzAtMy4xODcuMzYxLTMuNzg3IDIuNTg0LTQuMDg3LjAzMiAwIC4wOTEgMCAuMTUxLS4wMzF2LTEuMzgzaC03Ljc1NXYxLjM4M2MxLjQ0Mi4wNiAyLjEzMi4zIDIuNjQ1LjkuNDIyLjU0MS43MjEgMi4xOTUuNzgxIDQuNzc5bC4yMTEgNS43MTItLjA2LjA2LTExLjMwNC0xMi44MzRIOC41MDR2MS4zODNjLjk5Mi4xNSAxLjgzMy41NyAyLjk0NyAxLjQ3NGwuMTIuMTIuMTQ4IDExLjM2MnYuMzYyYzAgMS4xNjgtLjAyOCAxLjc0MS0uMTc5IDIuNDM0LS4zIDEuMjkxLTEuMjYzIDEuOTUyLTIuNzY1IDEuOTUyaC0uMTgydjEuNDEzaDguMTQ4di0xLjQxMnpNNTUuOTExIDEwOC4xMTJoLTE5Ljc1djEuMzgzaC4zMDFjMS44MzMgMCAyLjM3NC43NTIgMi4zNzQgMy4yNzd2MTEuMTgxYzAgMi41MjUtLjU0MSAzLjI0Ni0yLjM3NCAzLjI0NmgtLjMwMXYxLjQxM2gyMC4ybC44NzItNS4wOGgtMi4wNzRsLS4yMTEuMjQxYy0xLjA4MyAxLjI5Mi0xLjgzNSAxLjkyNC0yLjk3NiAyLjU1NC0xLjI5NC43NTMtMi4wMTUuODcyLTQuMzg5Ljg3Mi0yLjYxNCAwLTMuNDI1LS43NTItMy40MjUtMy4xNTV2LTUuNTAyaDIuODU1YzEuNTkzIDAgMi4yNTQuMDYyIDIuODI0LjMwMS44NzIuMzMxIDEuNTY1IDEuMjM0IDEuODMzIDIuNDA1aDEuOTg0di02LjY0NEg1MS42N2MtLjIwOC43ODItLjMzMSAxLjAyMy0uNzUgMS41MzMtLjY2MS43ODEtMS41OTQgMS4wMjQtMy45MzggMS4wMjRoLTIuODI0di03LjY2N2g0LjIwNmMxLjIzNCAwIDEuOTI0LjExOSAyLjY0Ni40MjIuOTYzLjM5MSAxLjYyNC45MzIgMi43MDcgMi4yODNsLjIxMS4yNDFoMS45ODN2LTQuMzI4ek02MC41NDIgMTA4LjExMnYxLjM4M2guMjRjMS44NjQgMCAyLjQwNi43NTIgMi40MDYgMy4yNzd2MTEuMTgxYzAgMi41MjUtLjU0MiAzLjI0Ni0yLjQwNiAzLjI0NmgtLjI0djEuNDEzaDEwLjU1MWMyLjk0NC4wMjkgMy45OTYtLjA5MSA1LjQ3LS40OCA0Ljc1LTEuMjM0IDcuODE1LTUuMTQgNy44MTUtMTAuMDQxIDAtMy41NDYtMS42NTMtNi43MDMtNC40MTgtOC40NDVhOS4wNTggOS4wNTggMCAwIDAtMi40NjUtMS4wNTJjLTEuMjkyLS4zNi0yLjM0Ni0uNDgxLTQuNTA5LS40ODFINjAuNTQydi0uMDAxem03Ljk2NSAxLjM4M2guNzgxbC45OTEuMDMxYzMuMjc1LjAyOCA0LjU2OS40MTkgNS45NTEgMS44OTNhNy43ODIgNy43ODIgMCAwIDEgMS44MzMgMy4wNjZjLjQyMiAxLjM1Mi42MzMgMi43OTYuNjMzIDQuMzI5IDAgMy44NzctMS40MTQgNi43OTItMy43MjkgNy43ODQtLjc1LjMzLTIuMTAzLjU2OS0zLjE4Ni41NjktMi40MzQgMC0zLjI3NS0uOTMyLTMuMjc1LTMuNTQ1di0xNC4xMjdoLjAwMXpNODcuMTQ0IDEwOC4xMTJ2MS4zODNoLjI3MWMxLjgzMyAwIDIuMzc0Ljc1MiAyLjM3NCAzLjI3N3YxMS4xODFjMCAyLjU1NC0uNTEgMy4yNDYtMi40NjUgMy4yNDZoLS4xMnYxLjQxM2gxMi4yMDVjMy4yNzUuMDI5IDQuNjYtLjI0MSA2LjI1Mi0xLjA4MiAxLjc0NC0uOTMyIDIuODg1LTIuNzA1IDIuODg1LTQuNTM4IDAtMi43MDctMi4yMjMtNC41NC02LjI1LTUuMTQxdi0uMDYxYzEuNjIxLS4zMyAyLjE2LS41MSAzLjIxNS0xLjA4MiAxLjUzMy0uODQxIDIuNDA0LTIuMjU1IDIuNDA0LTMuNzg2IDAtMy4wMzctMi43OTUtNC44MTEtNy42MzUtNC44MTFIODcuMTQ0di4wMDF6bTcuOTY1IDkuMTY5di03Ljc4NmgyLjYxM2MxLjUwNiAwIDIuMDQ3LjE1IDIuODg3Ljc1MiAxLjA1My43ODEgMS42MjMgMS45ODMgMS42MjMgMy40MjYgMCAxLjE3Mi0uMzkxIDIuMDE2LTEuMTcyIDIuNzA1LS44MTIuNjkzLTEuNDczLjkwMy0yLjk3NS45MDNoLTIuOTc2em0wIDEuNDQzaDIuOTE2YzIuODU1IDAgNC44MDkgMS44MDQgNC44MDkgNC40NDYgMCAyLjU1Ni0xLjc0NCA0LjA2MS00LjcxNyA0LjA2MS0yLjA0NyAwLTMuMDA4LTEuMDU0LTMuMDA4LTMuMzM3di01LjE3ek0xMjMuNjI5IDEyMC44ODdsMS4zNTQgMy4zOTdjLjAyOS4wOTEuMDg4LjI3MS4xNDguNTQxLjE4Mi42MDIuMjEzLjY5LjIxMy45MyAwIC44NDQtLjg3NSAxLjQxMy0yLjE2NiAxLjQ0NHYxLjQxM2gxMC4xODl2LTEuNDEzYy0xLjI5MSAwLTIuMDE2LS43MjEtMi44ODUtMi45MTVsLTYuNC0xNi40MTFoLTUuNTkybC43ODEgMS43MTMtNS41MzMgMTQuMDY4Yy0xLjA1MSAyLjcwMi0xLjUzMSAzLjE4Ny0zLjQ4NiAzLjU0NXYxLjQxM2g3LjA2NHYtMS40MTNjLTEuMzgxLS4xOC0yLjAxNC0uNzIxLTIuMDE0LTEuODA0IDAtLjQyLjE4LTEuMjMzLjQyMi0xLjk1M2wuOS0yLjU1Nmg3LjAwNXYuMDAxem0tLjY2Mi0xLjc3M2gtNS42NWwyLjY3Ni03LjU0NSAyLjk3NCA3LjU0NXpNMTQzLjcwNSAxMjcuMTk5aC0uMjEzYy0xLjA4MiAwLTEuOTUzLS4zNTgtMi40OTQtLjk5Mi0uNTEyLS42NjMtLjc4MS0yLjEwMy0uODQyLTQuNDQ4bC0uMjQtOS4wMTguMDU5LS4wNiAxNC4yNSAxNi4yM2gyLjA0M2MuMDYxLS4zNTkuMDYxLS41MS4wNjEtLjg3MiAwLS40ODEtLjA2MS0xLjAyMS0uMTUyLTEuNDcxbC0uMTgyLS45MDNhMTQuMjE0IDE0LjIxNCAwIDAgMS0uMjA5LTIuMzQ1bC0uMTgyLTkuNTI4di0uMThjMC0zLjE4Ny4zNjMtMy43ODcgMi41ODYtNC4wODcuMDMxIDAgLjA5MiAwIC4xNS0uMDMxdi0xLjM4M2gtNy43NTR2MS4zODNjMS40NDEuMDYgMi4xMzUuMyAyLjY0NS45LjQyMi41NDEuNzIzIDIuMTk1Ljc4MSA0Ljc3OWwuMjEzIDUuNzEyLS4wNjEuMDYtMTEuMzAzLTEyLjgzNGgtNy4zOTZ2MS4zODNjLjk5Mi4xNSAxLjgzNi41NyAyLjk0NyAxLjQ3NGwuMTIzLjEyLjE0OCAxMS4zNjJ2LjM2MmMwIDEuMTY4LS4wMzEgMS43NDEtLjE4IDIuNDM0LS4zMDMgMS4yOTEtMS4yNjQgMS45NTItMi43NjYgMS45NTJoLS4xODJ2MS40MTNoOC4xNDh2LTEuNDEyaC4wMDJ6TTE3NC41NDUgMTA5LjQ5NWguMjExYy45MzIgMCAxLjUzMS40NSAxLjUzMSAxLjE0MyAwIC42ODktMS4wOCAyLjA0NC0yLjU4NiAzLjI3NWwtNC40NzcgMy42Mzl2LTQuNzc5YzAtMi41MjUuNTQxLTMuMjc3IDIuNDA0LTMuMjc3aC4yNHYtMS4zODNoLTEwLjYxMXYxLjM4M2guMzM0YzEuODYxIDAgMi40MDQuNzUyIDIuNDA0IDMuMjc3djExLjE4MWMwIDIuNTI1LS41NDMgMy4yNDYtMi40MDQgMy4yNDZoLS4zMzR2MS40MTNoMTAuNTUxVjEyNy4yaC0uMThjLTEuODYzIDAtMi40MDQtLjcyMS0yLjQwNC0zLjI0NnYtNC44OThsNi4yMjEgNy4zMDJjLjQ4Mi41NzIgMS4xMDIgMS4wOCAxLjk2MyAxLjUyOC44MTguNDI3IDIuMjU0LjcyOCAyLjI1NC43MjhoNC41OXYtMS40MTNjLTEuMTExLS4xOC0yLjEwNC0uOTAzLTMuNTc2LTIuNTU2bC03LjQyNC04LjQ3NyA1LjAxOC00LjIwN2MyLjI1OC0xLjg5NSAyLjU4OC0yLjA3NCA0LjU3Mi0yLjQ2NXYtMS4zODNoLTguMjk3djEuMzgyek03NC45NTIgNzQuNjU2YTIwLjk4NSAyMC45ODUgMCAwIDEgNi4xOS0xNC45NDIgMjAuOTkxIDIwLjk5MSAwIDAgMSAxNC45NDItNi4xODggMjAuOTk3IDIwLjk5NyAwIDAgMSAxNC45NDMgNi4xODhjMy45OSAzLjk5MSA2LjE4OCA5LjI5NyA2LjE4OCAxNC45NDJzLTIuMTk3IDEwLjk1NC02LjE4OCAxNC45NDJhMjAuOTk5IDIwLjk5OSAwIDAgMS0xNC45NDMgNi4xOSAyMC45OTMgMjAuOTkzIDAgMCAxLTE0Ljk0Mi02LjE5Yy0zLjk5My0zLjk4OC02LjE5LTkuMjk3LTYuMTktMTQuOTQyem0tMi43MjkgMGEyMy43MDUgMjMuNzA1IDAgMCAwIDYuOTg5IDE2Ljg3M2M0LjUwNyA0LjUwNyAxMC40OTggNi45ODggMTYuODczIDYuOTg4IDYuMzczIDAgMTIuMzY1LTIuNDgxIDE2Ljg3MS02Ljk4OCA0LjUwOC00LjUwNiA2Ljk4OC0xMC41IDYuOTg4LTE2Ljg3MyAwLTYuMzcyLTIuNDgtMTIuMzY0LTYuOTg4LTE2Ljg3MWEyMy43MDQgMjMuNzA0IDAgMCAwLTE2Ljg3MS02Ljk4OGMtNi4zNzUgMC0xMi4zNjYgMi40ODEtMTYuODczIDYuOTg4YTIzLjcwNCAyMy43MDQgMCAwIDAtNi45ODkgMTYuODcxeiIgZmlsbD0iIzAwNkIzQyIvPjxwYXRoIGQ9Ik05Ni40MzIgNjQuNzg5bDcuMDc0LTQuODcxIDcuNTg2IDUuMDYydjE5LjQxN2wtNy4xNDYgNC44MS03LjI1Ny00LjYzNS03LjU1NCA0LjgzOS04LjA2Mi00LjgyMi4wNjQtMTkuNTQ0IDcuNDI1LTUuMTQxIDcuODcgNC44ODV6bS03LjYxMS0yLjg2MWwtNS45NDYgNC4wMjIgMjYuNDQyIDE3LjI0Mi4wNTMtMTcuMTM5LTUuNTc0LTMuNjEzdjkuMzkzbC0xNC45NzUtOS45MDV6bTYuMDMzIDIxLjU5NWwtNS43MTktMy43NTl2Ny40ODlsNS43MTktMy43M3oiIGZpbGw9IiMwMDZCM0MiLz48L2c+PC9zdmc+Cg==';

  // Inject a real <style> stylesheet rule. A stylesheet rule with !important on a
  // class selector beats inline-style specificity fights and is immune to any parent
  // container issue, because position:fixed below takes the element out of the
  // document flow entirely and anchors it to the viewport, not to any ancestor box.
  if (!document.getElementById('nedbank-logo-style')) {
    const style = document.createElement('style');
    style.id = 'nedbank-logo-style';
    style.textContent = `
      .nedbank-logo {
        position: fixed !important;
        top: 46px !important;
        left: 49px !important;
        transform: translateY(-50%) !important;
        height: 64px !important;
        width: auto !important;
        max-width: none !important;
        max-height: none !important;
        z-index: 2147483647 !important;
        pointer-events: none !important;
      }
      svg[aria-label="Snowflake CoWork"] {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  function swapLogo() {
    const svg = document.querySelector('svg[aria-label="Snowflake CoWork"]');
    if (svg) svg.style.setProperty('display', 'none', 'important');

    let img = document.querySelector('img.nedbank-logo');
    if (!img) {
      // only create if the Snowflake logo exists (i.e. we're on a page that has the navbar)
      if (!svg) return;
      img = document.createElement('img');
      img.className = 'nedbank-logo';
      img.src = LOGO;
      document.body.appendChild(img);
      requestAnimationFrame(() => {
        const rect = img.getBoundingClientRect();
        console.log('[NedbankBranding] Logo inserted. Rendered size:', rect.width, 'x', rect.height);
      });
    }

    syncLogoVisibility();
  }

  // The sidebar toggle button's aria-label tells us the sidebar state:
  //   "Hide navigation" => sidebar is OPEN  => show logo
  //   "Show navigation" => sidebar is CLOSED => hide logo
  function syncLogoVisibility() {
    const img = document.querySelector('img.nedbank-logo');
    if (!img) return;
    const toggle = document.querySelector('button[data-testid="sidebar-toggle-button"]');
    // If we can't find the toggle, default to showing the logo.
    const label = toggle ? (toggle.getAttribute('aria-label') || '').toLowerCase() : '';
    const sidebarCollapsed = label.includes('show'); // "Show navigation" = collapsed
    img.style.setProperty('display', sidebarCollapsed ? 'none' : 'block', 'important');
  }

  let attempts = 0;
  const interval = setInterval(() => {
    swapLogo();
    if (++attempts > 20) {
      clearInterval(interval);
      if (!document.querySelector('img.nedbank-logo')) {
        console.warn('[NedbankBranding] Gave up after 20 attempts — svg[aria-label="Snowflake CoWork"] was never found, or swap silently failed.');
      }
    }
  }, 500);

  // Watch for DOM changes (re-renders) AND for the sidebar toggling open/closed,
  // re-running the swap + visibility sync each time.
  new MutationObserver(() => {
    swapLogo();
    syncLogoVisibility();
  }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['aria-label', 'class', 'style'] });
})();
