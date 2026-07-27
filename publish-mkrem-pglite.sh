#!/usr/bin/env bash
# Publish the built packages/pglite as @mkrem/pglite@<version> (default 0.5.7)
# WITHOUT changing the workspace's @electric-sql/pglite identity: it scopes a
# copy of package.json for the publish and restores it afterwards. npm will
# prompt for your OTP. Run from anywhere.
set -euo pipefail
VER="${1:-0.5.7}"
OTP="${2:-}"
cd "$(dirname "$0")/packages/pglite"
[ -f dist/pg_trgm.wasm32-multi-memory.tar.gz ] || { echo "dist not built — run: pnpm --filter @electric-sql/pglite build" >&2; exit 1; }
cp package.json /tmp/pglite-pkg-restore.json
trap 'cp /tmp/pglite-pkg-restore.json package.json; echo "restored @electric-sql/pglite package.json"' EXIT
node -e "const p=require('./package.json'); p.name='@mkrem/pglite'; p.version='$VER'; require('fs').writeFileSync('package.json', JSON.stringify(p,null,2)+'\n')"
echo "publishing @mkrem/pglite@$VER (npm will prompt for OTP)…"
npm publish --access public ${OTP:+--otp="$OTP"}
