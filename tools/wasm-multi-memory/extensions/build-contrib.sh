#!/usr/bin/env bash
# strapkit: package the wasm32-initial (classic + multi-memory) artifacts for the
# contrib extensions PGlite already builds but had only shipped as classic
# single-memory bundles. Runs inside the pinned pglite-multi-memory-shared-tools
# image (it needs pglite-transform-side-module + node22). Mirrors
# extensions/build-initial.sh's build_extension, but the extensions live in
# packages/pglite (contrib) rather than their own package, so each generated
# wrapper lands under packages/pglite/src/contrib/generated/<ext>.ts.
set -euo pipefail

REPO_ROOT=${1:-/work}
CLASSIC_ROOT="${REPO_ROOT}/packages/pglite/release"
SHARED_ROOT="${REPO_ROOT}/tools/wasm-multi-memory/.out/postmaster-build/source-build/extensions"
BUILD_ROOT=/tmp/pglite-contrib-artifacts

test -f /.dockerenv || {
  echo 'must run inside the pinned pglite-multi-memory-shared-tools image' >&2
  exit 1
}

rm -rf "${BUILD_ROOT}"
mkdir -p "${BUILD_ROOT}/reports"

build_extension() {
  local ext=$1
  local pkg_dir="${REPO_ROOT}/packages/pglite"
  local classic="${BUILD_ROOT}/${ext}-classic"
  local multi="${BUILD_ROOT}/${ext}-multi-memory"

  mkdir -p "${classic}" "${multi}"
  tar -xzf "${CLASSIC_ROOT}/${ext}.tar.gz" -C "${classic}"
  tar -xzf "${SHARED_ROOT}/${ext}.tar.gz" -C "${multi}"

  # Rewrite each multi-memory side module to the tagged multi-memory ABI.
  while IFS= read -r side_module; do
    local raw="${BUILD_ROOT}/raw-${ext}-$(basename "${side_module}")"
    mv "${side_module}" "${raw}"
    pglite-transform-side-module \
      "${raw}" "${side_module}" \
      "${BUILD_ROOT}/reports/${ext}-$(basename "${side_module}").transform.json" \
      "${BUILD_ROOT}/reports/${ext}-$(basename "${side_module}").audit.json"
  done < <(find "${multi}" -type f -name '*.so' | sort)

  mkdir -p "${pkg_dir}/release" "${pkg_dir}/src/contrib/generated"
  node22 "${REPO_ROOT}/tools/wasm-multi-memory/extensions/package-extension.mjs" \
    "${pkg_dir}/extension-artifacts/${ext}/wasm32-classic.json" \
    "${classic}" \
    "${pkg_dir}/release/${ext}.wasm32-classic.tar.gz" \
    "${pkg_dir}/release/${ext}.wasm32-classic.json"
  node22 "${REPO_ROOT}/tools/wasm-multi-memory/extensions/package-extension.mjs" \
    "${pkg_dir}/extension-artifacts/${ext}/wasm32-multi-memory.json" \
    "${multi}" \
    "${pkg_dir}/release/${ext}.wasm32-multi-memory.tar.gz" \
    "${pkg_dir}/release/${ext}.wasm32-multi-memory.json"

  node22 "${REPO_ROOT}/tools/wasm-multi-memory/extensions/generate-wrapper.mjs" \
    "${pkg_dir}/src/contrib/generated/${ext}.ts" \
    "wasm32-classic=${pkg_dir}/release/${ext}.wasm32-classic.json=../../release/${ext}.wasm32-classic.tar.gz" \
    "wasm32-multi-memory=${pkg_dir}/release/${ext}.wasm32-multi-memory.json=../../release/${ext}.wasm32-multi-memory.tar.gz"

  echo "packaged ${ext} (classic + multi-memory)"
}

for ext in "$@"; do
  [ "${ext}" = "${REPO_ROOT}" ] && continue
  echo "=== building ${ext} ==="
  build_extension "${ext}"
done
echo CONTRIB-BUILD-DONE
