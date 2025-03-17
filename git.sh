#!/bin/env bash

git add .
git commit -m "$*"
git push
bun run build
cd dist
git add .
git commit -m "$*"
git push
cd ..