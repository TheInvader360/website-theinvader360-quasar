rm -rf ./dist/
yarn
quasar build
cp ./.githubpages/404.html  ./dist/spa/404.html
cd ../theinvader360.github.io
rm -rf $(ls -aI ".git")
cp -R ../website-theinvader360-quasar/dist/spa/* .
git add -A
git commit -m "build-and-deploy"
git push

