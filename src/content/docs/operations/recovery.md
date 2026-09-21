---
title: Backup and recovery
---

The backup timer creates a consistent SQLite snapshot daily and records a timestamp only after a successful integrity check. It restores the snapshot into a separate verification database and validates integrity and required tables; this does not modify the active database. Backups remain in the protected host backup directory and are included in existing host backup coverage.

Before activation, create a fresh snapshot. To roll back application code, restore the previous current symlink and restart the web/worker services. Keep schema changes additive so this remains safe.

For data restoration, stop the worker and web service, preserve the current database and WAL files, verify the desired backup in isolation, install it under the service account, then start services and run health checks. Restore never runs automatically over current data.

The recovery test records evidence separately from backup creation. Observe distinguishes fresh backups from tested recovery. Preserve snapshots before upgrades and keep at least 14 daily backups.

## Failure drills
Use an isolated test database for target crossings and email outbox checks. Stop/restart only PriceDip's worker to verify heartbeat degradation and lease recovery. Simulate provider and Qwen errors using fixtures. Do not disrupt shared Ollama or Observe to test PriceDip.
