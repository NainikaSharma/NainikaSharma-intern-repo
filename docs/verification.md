# Verification — 7 October 2026

The main website was checked using Node.js 24 on Linux and Chromium.

| Check | Result |
| --- | --- |
| Clean dependency installation with `npm ci` | Passed |
| Production build with `CI=true npm run build` | Passed |
| ESLint source check | Passed |
| Prettier source formatting check | Passed |
| Jest unit tests | 13 passed across 5 suites |
| Browser scenarios | 14 passed |
| Browser runtime errors during the scenarios | 0 |
| Horizontal overflow at 320, 390, 768, 1024, and 1440 pixels | None on the checked pages |
| Original files missing after the update | 0 |
| Original Markdown files unchanged, excluding the two READMEs | 18 |

## Browser scenarios

1. Direct visits to the overview, its `/home` alias, profile, and ten exercises.
2. Local counter increase/decrease and its zero lower bound.
3. Redux counter state across navigation, shared messages, and its lower bound.
4. User form: required fields, short name, invalid email, and valid submission.
5. Contact form: validation, success message, and reset after submission.
6. List builder: blank-input rejection and adding an item.
7. Memoized sum and callback buttons.
8. Effects: controlled post response, HTTP 500 feedback, and child toggle.
9. Interval counter advance and reset after navigation.
10. Missing ReqRes configuration and Spanish login labels.
11. Unknown-route recovery link.
12. All main pages at the five viewport widths above.
13. Mobile menu opening, navigation, and closing after selection.
14. No uncaught browser runtime errors.

The post-fetch success and failure cases used controlled browser responses.
Live ReqRes authentication was not tested because no user API key was supplied.
The preserved Vite starter and original Markdown/spelling exercises were not
part of the main website's validation results.

Screenshots show the overview and contact form at desktop and mobile sizes.
The machine-readable scenario results are in `qa-results.json`.
