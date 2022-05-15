#!/bin/bash

BASE="$(realpath "$(dirname "${BASH_SOURCE[0]}")/..")"
cd "${BASE}" || exit 1

VER=$(grep 'monero-javascript' package.json | cut -f4 -d'"' | cut -f2 -d'^')
if [ -z ${VER} ]; then
  echo "${WHITE}* monero-javascript ${RED} is not installed.${RESTORE}"
  exit
fi

LIB="node_modules/monero-javascript"
DST="static/monero-javascript"

#if [ -f "${LIB}/dist/monero_wallet_full.js" ]; then
if [ -f ${LIB}/dist/monero_wallet_full.js ]; then
  if [ ! -d "${DST}" ]; then
    mkdir -p ${DST}
  fi
  cp "${LIB}/dist"/* "${DST}/"
  cp "${LIB}/src/main/js/common/MoneroWebWorker.js" "${DST}/"
else
  echo "${RED}* Monero Javascript not found: ${LIB}${RESTORE}"
fi

${BASE}/script/patch-popper.sh
