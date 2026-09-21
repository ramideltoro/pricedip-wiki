---
title: Seller standards
---

## Eligibility rules
Direct sales by Amazon, Walmart, Best Buy, Target, and verified manufacturer stores qualify when the source explicitly identifies the seller. A retailer domain alone is not sufficient evidence.

eBay requires at least 99% positive feedback and a feedback score of 100. Other marketplace sellers require attributable ratings of at least 4.5/5 from 20 reviews, or a business identity independently verified against an established retailer.

Missing seller identity or reputation fails closed. Qwen explains evidence but cannot override deterministic eligibility checks. A verified marker describes recorded evidence, not a guarantee.

Local marketplace listings also need a verifiable location within the account's configured radius. Listings behind login or without reputation/location evidence may produce no qualifying results.

## Rechecking
Every recorded observation includes source evidence and timestamp. A new extraction rechecks eligibility before an alert. Different conditions and listing identities are not merged. Changed product titles halt automatic observation until the owner adds the new listing.

Ambiguous structured data containing multiple product variants is rejected. Marketplace ratings must use a five-point scale; unrecognized scales do not qualify.
