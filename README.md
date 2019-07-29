<!-- [![CircleCI](https://circleci.com/gh/strajk/eslint-plugin-cypress-strict.svg?style=svg)](https://circleci.com/gh/strajk/eslint-plugin-cypress-strict) -->
<!-- [![Coverage Status](https://coveralls.io/repos/github/strajk/eslint-plugin-cypress-strict/badge.svg?branch=master)](https://coveralls.io/github/strajk/eslint-plugin-cypress-strict?branch=master) -->

<center>

# eslint-plugin-cypress-strict

🤘 Opinionated ESLint rules for writing [Cypress.io](https://www.cypress.io/) tests 🤘

</center>

## Installation & Setup

**Install**

```bash
# with NPM
npm i -D eslint-plugin-cypress-strict

# or Yarn
yarn add -D eslint-plugin-cypress-strict
```
**Setup** – adjust your `.eslintrc`

Option A: Via extends – this will add the plugin and use all the rules automatically

```
"extends": [ "plugin:cypress-strict/recommended" ]
```

Option B: Add the plugin and list individual rules manually

```
plugins: [ "cypress-strict" ]
rules: {
  "cypress-strict/»rule name«": "error"
}
```

## Supported Rules

### CSS selectors over commands `cypress-strict/selectors-over-commands`

Prefer whole selectors directly inside `cy.get(»selector«)` instead of using Cypress commands.

**Why?**
When whole selector is in one string, it's easier to copy-paste it and debug it in Cypress playground / Dev Tools.

| 😐                                    | 🤩                                |
| ------------------------------------- | --------------------------------- |
| `cy.get("button").first()`            | `cy.get("button:first")`          |
| `cy.get("button").eq(3)`              | `cy.get("button:eq(3)")`          |
| `cy.get("button").not(".unwanted")`   | `cy.get("button:not(.unwanted)")` |
| `cy.get("»modal«").find(»close btn«)` | `cy.get("»modal« »close btn«")`   |
| `cy.get("tr").filter(".odd")`         | `cy.get("tr.odd")`                |


### Subject-less commands chained directly on cy `cypress-strict/subjectless-commands-directly-on-cy`

**Why?**
Chained commands can cause impression that they are working with previous results.

`cy.get(".parent").get(".child")` – Looks like it's selecting `.child` inside `.parent`

`cy.get("…").wait(5000)` - Looks like it's waiting 5s for the element...

### "Should be" instead of "should to be" `cypress-strict/no-should-to-be`

**Why?**
Should to be is [incorrect](https://www.oxfordlearnersdictionaries.com/us/definition/american_english/should) 


---

## Contributing

🙏 🙏 🙏 Issues/PRs/gratitude is welcome 🙏 🙏 🙏


#### Development tips

##### Publish

```
npx pack publish
```

##### Link locally

In this project

```
npx pack build
cd pkg
yarn link 
cd ..
# after changes
npx pack build
```

In dependant projects

```
yarn link "eslint-plugin-cypress-strict"
```
 
