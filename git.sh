#!/bin/env bash

bunx tailwindcss -i ./static/tailwind-input.css -o ./static/tailwind.css
git add .
git commit -m "$*"
git push
bun run build
cd dist
git add .
git commit -m "$*"
git push
cd ..