---
title: Development and testing
---

Use Node 22.22 or newer. Run npm ci, npm test, and npm run build in the app repository. Set DB_PATH to an isolated development database. Start the compiled API with npm start and frontend with npm run dev. The Vite proxy forwards API/auth calls to loopback port 4350. Never use production cookies in tests.

Tests cover seller boundaries, SSRF exclusions, strict price comparisons, observations, deduplicated alerts, and lease recovery. Browser verification covers public views, research, responsive layouts, and owner controls using isolated fixtures.

## Documentation contract
Documentation is canonical in pricedip-wiki. Update affected guides for each behavioral/configuration/dependency change, then run node scripts/docs.mjs record ../pricedip-wiki from the tracked application checkout. This records a reviewed source fingerprint; never use it to conceal stale explanations.

The check mode rejects a different source tree. Release mode generates API/configuration references and a commit-linked release page only after the contract passes. PRs declare documentation impact and include the companion wiki change. Untrusted PR jobs have no deployment secrets.
