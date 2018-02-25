#!/bin/sh

commit() {
  git config --global user.name "codermarcos"
  git config --global user.email "coder.marcos@gmail.com"
  git checkout -b release origin/release
  git add . dist/*
  git commit -m "Release version $(cat package.json | grep version | awk -F\":\" '{print $2}' | sed 's/[\", ]//g')#$TRAVIS_BUILD_NUMBER"
  git push -q https://$access_token@github.com/Developers-SP/my-team-web.git release
}

commit
