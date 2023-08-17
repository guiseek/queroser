#!/bin/bash

for dir in $(ls libs); do
    npx tsuml2 --glob "./libs/$dir/**/*.ts" -o "./$dir.svg"
done
