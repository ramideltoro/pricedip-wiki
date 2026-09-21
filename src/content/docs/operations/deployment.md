---
title: Deployment and releases
---

GitHub Actions validates tests, TypeScript, production build, and the exact documentation contract. The release job resolves the wiki revision, generates references, pushes wiki publication, waits for the published release manifest, then deploys an immutable application artifact through the existing Cloudflare SSH route.

The production host runs pricedip.service, pricedip-worker.service, and pricedip-search.service. Persistent data is stored under /var/lib/pricedip. Runtime secrets live in /etc/pricedip/runtime.env. The application release lives beneath /opt/pricedip/releases and current is a symlink.

A server-side lock serializes deployment. Activation runs only after an HTTP health check; failed activation restores the previous symlink and services. Database migrations must remain compatible with the previous release; destructive changes require a separate migration/recovery plan.

The Cloudflare tunnel publishes only the web service. Search, Ollama, metrics, and SQLite are not exposed publicly. Changes to shared host infrastructure must use its existing repository and wiki workflow.

## Dependency maintenance
Dependabot opens update PRs. Lockfiles and pinned Actions support repeatable builds. Run behavior and deployment tests before merging. Production secrets must never enter pull_request jobs.

## Documentation publication
The Starlight wiki runs on GitHub Pages. The app source commit is available in the wiki release manifest and app health. A failed or mismatched wiki publication blocks application deployment.

Each release page preserves a complete snapshot of the reviewed guides and generated API/configuration references. The application Documentation link opens its exact release. The commit ledger covers the complete repository history. Deployment and rollback records retain both application and wiki commit IDs in the private database.

Application main requires pull requests, the validate check, resolved conversations, and linear history. Production jobs are restricted to protected branches. Wiki main rejects force pushes and deletion; the restricted release key can append validated documentation commits. Activation requires authenticated readiness for the expected application commit, database access, and a fresh worker heartbeat. Readiness returns HTTP 503 when collection is not ready, independently of the minimal public availability endpoint.
