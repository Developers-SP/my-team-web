#!/bin/sh

git config user.name "Travis CI"
git config user.email "$COMMIT_AUTHOR_EMAIL"
git checkout release
git add . dist/*
git commit -m "Release version $(cat package.json | grep version | awk -F\":\" '{print $2}' | sed 's/[\", ]//g')#$TRAVIS_BUILD_NUMBER"
git push -q https://$access_token@github.com/Developers-SP/my-team-web.git release

