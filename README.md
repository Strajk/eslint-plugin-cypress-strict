[![CircleCI](https://circleci.com/gh/strajk/eslint-plugin-cypress-strict.svg?style=svg)](https://circleci.com/gh/strajk/eslint-plugin-cypress-strict)
[![Coverage Status](https://coveralls.io/repos/github/strajk/eslint-plugin-cypress-strict/badge.svg?branch=master)](https://coveralls.io/github/strajk/eslint-plugin-cypress-strict?branch=master)

# eslint-plugin-cypress-strict

Strict & opinionated ESLint rules for writing Cypress tests

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-cypress-strict`:

```
$ npm install eslint-plugin-cypress-strict --save-dev
```

## Usage

Add `cypress-strict` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "cypress-strict"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "cypress-strict/rule-name": "error"
    }
}
```

## Supported Rules

⚒ For now, please check `src/rules` folder

## Contributing

🙏 🙏 🙏 PRs welcomed 🙏 🙏 🙏
