---
title: Deployment verification
---

## Release a46ec257533d
Verified on 2026-09-21. At verification, application and published wiki manifests both named application commit `a46ec257533d8efb56ccb29fb9392db326d16525`.

- Twelve application tests cover owner-only authentication, rejected accounts, account and location isolation, CSRF, SSRF, seller thresholds, expired and ambiguous offers, strict target crossings, durable leases, duplicate prevention, retry budgets, dependency outages, and stale documentation rejection.
- Observe's 58 tests include PriceDip telemetry thresholds, stale tracking, Qwen failures, documentation drift, workflow failures, and recovery. Infrastructure tests cover importing those findings into the established inspection workflow.
- Desktop and 390-pixel mobile layouts were inspected in a browser. No horizontal overflow was detected. Sample details, chart loading, Escape dismissal, and focus restoration were checked. The wiki search index and custom HTTPS domain were verified.
- A real rollback activated the previous immutable release and returned to the current release. Both transitions were recorded. A forced worker termination automatically restarted under systemd and readiness recovered.
- A production database snapshot was opened independently, passed integrity checks, and supported table queries. Backup and restoration timestamps reached the monitoring pipeline. This is a database restoration check, not a full bare-metal recovery exercise.
- Prometheus queries through Grafana confirmed current availability, matching documentation, and telemetry under one minute old. Both applications and their dedicated dashboards appear in Observe; the daily fleet inspection includes both.
- Source tests preserved uncertainty: Sony returned HTTP 403. Apple exposed a price but insufficient stock and condition evidence, so it could not trigger an ordinary alert.

## Authentication and delivery boundaries
The production Google sign-in flow completed successfully using the owner's existing Google session through the Observe OAuth broker. The authenticated owner workspace and private ZIP/radius settings were verified in the browser, without changing location preferences. Browser-bound assertions, rejection of unauthorized accounts, expiration, replay protection, and account isolation were additionally tested with isolated fixtures.

Email retry, idempotency, deduplication, and budgets were tested with isolated provider responses. No test price-drop emails were sent. Only real qualifying observations can enter the production outbox; showcase samples never do.

## Coverage constraints
Approved eBay production credentials are not currently configured. Login walls, blocked extraction, unknown condition/availability, missing seller evidence, and unsupported eBay variation URLs remain visible exclusions. A healthy web service does not imply that every retailer is accessible.

## Pickup validation follow-up
The additional location regression test brings the application suite to 13 tests. It verifies that national-retailer pickup offers require location settings, nearby coordinates pass the selected radius, and distant or missing locations fail closed. The same eligibility rule is applied in discovery and collection.
