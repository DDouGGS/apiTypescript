#!/bin/bash

# git main
echo '# Current branch'
git branch --show-current
echo '# Checkout Main'
git checkout main
git pull origin main
# shell
echo "Executado com sucesso."
