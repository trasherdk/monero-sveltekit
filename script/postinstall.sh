#!/bin/bash

BASE="$(realpath "$(dirname "${BASH_SOURCE[0]}")/..")"
cd "${BASE}" || exit 1
LIB="${BASE}/node_modules/monero-javascript"
DST="${BASE}/static/monero-javascript"

#if [ -f "${LIB}/dist/monero_wallet_full.js" ]; then
if [ -f node_modules/monero-javascript/dist/monero_wallet_full.js ]; then
  if [ ! -d "${DST}" ]; then
    mkdir -p ${DST}
  fi
  cp -r "${LIB}/dist/*" "${DST}/"
  cp "${LIB}/src/main/js/common/MoneroWebWorker.js" "${DST}/"
else
  echo "${RED}* Monero Javascript not found: ${LIB}${RESTORE}"
fi
