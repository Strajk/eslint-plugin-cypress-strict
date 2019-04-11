[![CircleCI](https://circleci.com/gh/strajk/eslint-plugin-cypress-strict.svg?style=svg)](https://circleci.com/gh/strajk/eslint-plugin-cypress-strict)
[![Coverage Status](https://coveralls.io/repos/github/strajk/eslint-plugin-cypress-strict/badge.svg?branch=master)](https://coveralls.io/github/strajk/eslint-plugin-cypress-strict?branch=master)

# eslint-plugin-cypress-strict

Strict & opinionated ESLint rules for writing Cypress tests

## Installation

```
npx install-peerdeps --dev eslint-config-cypress-strict

// Option A: Use config -> will add plugin and use all rules automatically
"extends": [ "cypress-strict:recommended" ]

// Option B: Add plugin and list rules manually
plugins: [ "cypress-strict" ]
rules: {
  "cypress-strict/»rule name«": "error"
}
```

## Supported Rules

### CSS Selectors over commands

`cypress-strict/selectors-over-commands`

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


### Subject-less commands chained directly on cy

`cypress-strict/subjectless-commands-directly-on-cy`

Chained commands can cause impression that they are working with previous results.

`cy.get(".parent").get(".child")` – Looks like it's selecting .child inside .parent

`cy.get("…").wait(5000)` - Looks like it's waiting 5s for the element...


## Contributing

🙏 🙏 🙏 PRs welcomed 🙏 🙏 🙏
