# Brunch + Babel/ES6

This is a small variation on the modern JS skeleton for [Brunch](http://brunch.io).  I tried to move move the index.html file somewhere else but Brunch would fail on any attempt to do so. As I recall, I really just renamed `app` to `src`, `public` to `dist`, switched to `yarn`, fixed the logo, and updated the brunch-config.js file, but those are things I'd want in any project going forward.

## Installation

Clone this repo manually or recreate the original skeleton using `brunch new dir -s es6`.

## Getting started

* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Yarn 1.x](https://classic.yarnpkg.com/lang/en/): follow [installation guide](https://classic.yarnpkg.com/en/docs/install)
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * Brunch plugins and app dependencies: `yarn install` (or just `yarn`)
* Run:
    * `yarn start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)
