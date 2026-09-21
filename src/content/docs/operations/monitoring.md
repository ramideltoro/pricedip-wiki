---
title: Observe integration
---

[Observe](https://observe.ramideltoro.com) registers PriceDip and PriceDip Wiki as separate applications. The app navigation links to Observe; the portal links to both sites and repositories.

The existing minute collector fetches private PriceDip Prometheus metrics and forwards them through Alloy/Grafana. Dedicated dashboards cover availability, requests, errors, memory, worker heartbeat, queue age, stale products, collection outcomes, Qwen duration/errors, email delivery, backup age, restore evidence, and docs alignment.

Telemetry warns at three minutes and fails at five. Tracked products with previous successful observations become stale after two hours. A blocked provider is a data-quality limitation; it does not mean the web service is down. Missing observations and missing metrics do not count as healthy.

Public views contain aggregate operational evidence. Logs, account settings, ZIP codes, query text, private delivery details, and secrets are excluded. Existing owner access controls diagnostics. Operational incidents use Observe's existing mechanisms; product-price emails are independent.

PriceDip does not depend on Observe for collection, research, or existing sessions. New Google sign-ins require the broker. Documentation synchronization failure blocks releases and remains visible through release evidence.

Qwen model availability and SearXNG health are checked every minute. These checks describe dependency reachability; retailer accessibility is measured by individual collection outcomes. Never infer verified offer coverage from a healthy search service. Source counters use only fixed retailer IDs, with no product names, URLs, or location labels.
