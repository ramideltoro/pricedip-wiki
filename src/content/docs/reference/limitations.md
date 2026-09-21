---
title: Coverage and limitations
---

The service uses no paid API or AI subscriptions. Automatic source access is best effort; hourly scheduling cannot guarantee that a retailer will permit retrieval.

Amazon, Walmart, Best Buy, and Target require explicit seller identity and a single exact offer. Marketplace merchant attribution may not be present in structured data. eBay API requires configured production credentials and any required approval; without it, public extraction may not expose reputation evidence. Craigslist frequently lacks attributable reputation. Facebook Marketplace and OfferUp can require login. These situations are excluded, not silently trusted.

Local radius is enforced only when the source supplies verifiable location data. ZIP centroids provide approximate distance, not driving distance. Missing location is not assumed nearby.

Qwen is a local research aid. Inaccessible reviews or specifications are reported as missing; AI text is never used as observed price data. Search-engine snippets may be stale; offers are extracted from their source.

Email is bounded by free service allowances. Failed deliveries remain queued. Alerts compare item prices before shipping and tax.

Sample products, research, charts, and events are explicitly illustrative. They never populate real watchlists or monitoring metrics.
