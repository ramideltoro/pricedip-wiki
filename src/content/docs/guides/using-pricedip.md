---
title: Using PriceDip
---

## Track a product
Sign in with Google, create a watchlist, paste an HTTPS listing URL, choose its condition, and set a USD item-price target. PriceDip verifies the listing and seller before recording observations. Watchlists can be public or private. Account-specific ZIP code and radius remain private.

The initial release supports 25 active products per account. Edit the target or pause monitoring from product details. Prices are checked approximately hourly; provider blocks or retries can delay observations. History begins with the first verified observation.

## Research and discovery
Search a product name or model. Local discovery requires your own ZIP code and radius (1–500 miles). Direct search links remain available when search engines block automatic retrieval. Open a tracked product and request Qwen research; the brief is queued and cites retrieved sources. Reload the product after processing.

## Alerts
An available, eligible fixed-price USD offer below the target generates an event, including on the initial check. One event is generated until the price rises back to the target or above. Changing a target rearms eligibility. Email delivery is retried using an idempotency key. Shipping and taxes are not part of the target; shipping is shown when known. Auctions, membership pricing, and unverified offers are excluded.

## Public preview
Visitors can browse published products and events. They cannot search externally, generate research, change targets, or read location/account settings. The sample showcase never sends alerts.

Discovery filters support retailer, condition, and maximum item price. Local tracking requires configured account location and rejects listings outside the selected radius. Paused products can be reactivated only within the active-product limit.

Discovery accepts product names, model numbers, and exact supported HTTPS listing URLs. Filter by retailer, condition, seller name, maximum item price, and delivery or pickup. Unknown delivery methods do not pass a delivery filter. Local searches use your private ZIP and radius from Settings; unverifiable locations are excluded. Shipping is shown separately when the source provides it.

Pickup offers from national retailers follow the same private ZIP/radius eligibility rules as local marketplaces. Selecting pickup requires a configured ZIP code; missing or out-of-range locations are excluded both during discovery and during monitoring before alerts. Delivery offers remain independent of travel radius.
