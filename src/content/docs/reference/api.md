---
title: API reference
---

Generated from application commit `f7ad08c153735de5718fd862aa846e307cf37701`.

| Method | Route | Access |
|---|---|---|
| GET | `/healthz` | Public / authentication flow |
| GET | `/api/session` | Public / authentication flow |
| GET | `/auth/login` | Public / authentication flow |
| GET | `/auth/callback` | Public / authentication flow |
| POST | `/api/owner/logout` | Owner session + same-origin writes |
| GET | `/api/public/overview` | Public / authentication flow |
| GET | `/api/public/products/:id` | Public / authentication flow |
| GET | `/api/owner/settings` | Owner session + same-origin writes |
| PUT | `/api/owner/settings` | Owner session + same-origin writes |
| POST | `/api/owner/watchlists` | Owner session + same-origin writes |
| GET | `/api/owner/products` | Owner session + same-origin writes |
| POST | `/api/owner/search` | Owner session + same-origin writes |
| POST | `/api/owner/products` | Owner session + same-origin writes |
| PATCH | `/api/owner/products/:id` | Owner session + same-origin writes |
| POST | `/api/owner/products/:id/:action` | Owner session + same-origin writes |
| GET | `/internal/metrics` | Private bearer token |
| GET | `/internal/readyz` | Private bearer token |
