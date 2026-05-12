#!/bin/sh
set -e
cd "$(dirname "$0")"

# Commit 1: Hypatia picture
git add src/person/hypatia.ts
git commit -m "feat: add profile picture for Hypatia"

# Commit 2: Prettier config relaxation + bulk reformat of everything else
git add .
git commit -m "chore: switch to double-quotes, widen printWidth to 120, reformat"
