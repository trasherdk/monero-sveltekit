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

echo "* Patch the Popper package"

TARGET="${BASE}/node_modules/.pnpm/\@popperjs+core\@2.11.4/node_modules/\@popperjs/core/package.json"
WANT='  "type": "module",'
HAVE='"module": "lib/index.js",'
if ls -1 "${TARGET}" > /dev/null 2>&1 ; then
  if grep ${WANT} "${TARGET}" > /dev/null 2&>1 ; then
    echo "Already patched."
  else
    sed "/${HAVE}\$/a ${WANT}" "${TARGET}"
    if grep ${WANT} "${TARGET}" > /dev/null 2&>1 ; then
      echo "Patch OK"
    else
      echo "Patch Failed"
    fi
  fi
else
  echo "Popper not found: ${TARGET}"
fi
