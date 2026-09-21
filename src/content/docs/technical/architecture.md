---
title: Architecture
---

## Components
React/Vite renders the dark amber interface. Fastify serves the frontend and API on loopback port 4350. A separate Node worker performs hourly collection, Qwen requests, and email delivery. Private SearXNG listens on 4352. Ollama remains the existing local service; PriceDip selects qwen2.5:3b by default.

SQLite uses WAL, foreign keys, busy timeout, versioned migrations, and indexes. Accounts own watchlists. Products reference watchlists. Observations and research reference products. Jobs have durable leases; events and the email outbox are transactionally created with price observations. Worker restart reclaims expired leases.

## Authentication
Observe acts as a narrow Google sign-in broker. PriceDip issues browser-bound state. Observe accepts only the fixed PriceDip destination and exact owner email, signs a 60-second audience-restricted assertion, and PriceDip consumes state once before issuing its own HttpOnly Secure session cookie. Each application retains independent sessions. Observe being unavailable does not stop monitoring or existing PriceDip sessions, but new sign-ins require it.

## Evidence boundaries
Source adapters normalize observations. Seller policy, price parsing, variant consistency, and alert crossings run in deterministic code. Qwen receives bounded untrusted text and produces schema-validated research with source IDs. Invalid citations fail the job.

## Fetch security
HTTPS only, no URL credentials, public-address validation, pinned DNS for HTTP extraction, bounded redirects and response sizes. Browser extraction is isolated to the original origin with pinned resolution and bounded time. Private source URLs are rejected.

## Data retention
Verified observations and events persist. Completed job records expire after seven days; active jobs and failures persist until resolved. Chart responses are bounded without deleting stored observations. Secrets are external runtime configuration.
