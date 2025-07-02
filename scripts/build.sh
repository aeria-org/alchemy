#!/bin/sh

rm -rf packages/*/dist

pnpm --filter='./packages/*' build \
  && pnpm --filter='./playground' build

