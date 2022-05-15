#!/bin/bash

BASE="$(realpath "$(dirname "${BASH_SOURCE[0]}")/..")"
cd "${BASE}" || exit 1

(
echo "* Patch the Popper package"
TARGET=${BASE}'/node_modules/.pnpm/@popperjs+core@2.11.5/node_modules/@popperjs/core'

if [ -d ${TARGET} ]; then
  cd ${TARGET} || exit 1
else
  echo "Error: target not found: ${TARGET}"

  cd ${BASE}'/node_modules/.pnpm'/ && { pwd; } || { echo "cd #1 failed"; exit 1; }
  cd '@popperjs+core@2.11.5'/ && { pwd; } || { echo "cd #2 failed"; exit 1; }
  cd 'node_modules'/ && { pwd; } || { echo "cd #3 failed"; exit 1; }
  cd '@popperjs/core'/ && { pwd; } || { echo "cd #4 failed"; exit 1; }
fi

if [ ! "${TARGET}" = "$(pwd)" ]; then
  echo "cd failed:"
  echo "Target..: ${TARGET}"
  echo "Current.: $(pwd)"
  exit 1
fi

FILE='package.json'
WANT='"type": "module"\,'
HAVE='"module": "lib\/index.js"\,'
if [ -f "${FILE}" ]; then
  echo "Check if ${WANT} is in ${FILE}"
  if grep ${WANT} "${FILE}" > /dev/null 2&>1 ; then
    echo "Already patched."
  else
    echo "Performing the patch..."
    sed --in-place='.bak' '/'"${HAVE}"'/i '"\ \ ${WANT}" "${FILE}"
    echo "Check if patch was successful"
    if grep ${WANT} "${FILE}" > /dev/null 2&>1 ; then
      echo "Patch OK"
    else
      echo "Patch Failed"
    fi
  fi
else
  echo "Popper ${FILE} not found in: ${TARGET}"
fi
)
