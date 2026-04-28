# System Audit: Version 3 Cloning & Runtime Hang

## Issue Overview
During the creation of `apps/web-library-v3`, a severe system hang occurred, consuming 100% CPU and requiring a force-restart. This was accompanied by a `Runtime SyntaxError` regarding an "Invalid or unexpected token" in the generated `.next` files.

## Root Cause Analysis
The failure was caused by an **unclean clone** of the `web-library-v2` workspace. 

### The "Breakpoint"
When executing `cp -R apps/web-library-v2/ apps/web-library-v3/`, the following directories were inadvertently copied:
1.  **`.next/`**: Contains compiled build artifacts, cached server-side code, and internal mappings specific to the `v2` environment.
2.  **`node_modules/`**: Contains symlinks that point to the root of the monorepo based on the original directory's location.
3.  **`.turbo/`**: Contains task cache metadata.

### Why it crashed the CPU:
Next.js attempts to "reconcile" existing build artifacts in the `.next` folder during development. Because the artifacts contained hardcoded paths or corrupted symlinks from the old workspace, the Dev Server entered an infinite loop or attempted to parse binary/stale data as JavaScript (hence the `SyntaxError`). This overhead in a monorepo environment can quickly saturate all available CPU threads as Turbo and Next.js fight over invalid file descriptors.

## Identified Vulnerabilities in Workflow
1.  **Artifact Persistence**: Development artifacts are not portable across workspace directories.
2.  **Monorepo Symlink Fragility**: Copying `node_modules` manually breaks the `pnpm` workspace linking logic.
3.  **Hindi Character Encoding (Potential)**: While not the primary cause, high-density UTF-8 (Hindi/Sanskrit) in large objects can increase parsing overhead if the engine is already struggling with memory/CPU.

## Remediation & Prevention
### Immediate Fix
- Deleted `.next`, `node_modules`, and `.turbo` in the new `web-library-v3` directory.
- Re-ran `pnpm install` at the root to establish clean, correct links for the new workspace.

### Standard Operating Procedure (SOP) for Cloning
When cloning a workspace in this monorepo, **NEVER** use a simple recursive copy if the source has been run. Use the following pattern:
```bash
# Correct way to clone without artifacts
mkdir -p apps/new-app
rsync -av --exclude='.next' --exclude='node_modules' --exclude='.turbo' apps/old-app/ apps/new-app/
```

## Status
The `web-library-v3` environment is now clean and restored. The system should no longer hang.
