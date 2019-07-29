/* eslint-env jest */

import ruleTester from "../../common/ruleTester"
import noShouldToBe from "../no-should-to-be"

const err = { messageId: "noShouldToBe" }

describe("noShouldToBe", function () {
  ruleTester.run("no-should-to-be", noShouldToBe, {
    valid: [
      { code: "cy.get('').should()" }, // doesn't make sense, but out of scope for this rule
      { code: "cy.get('').should('')" }, // doesn't make sense, but out of scope for this rule
      { code: "cy.get('').should('be')" }, // doesn't make sense, but out of scope for this rule
      { code: "cy.get('').should('be.visible')" },

      { code: "cy.get('').should(cond ? 'be.visible' : 'to.be.visible')" },
      { code: "cy.get('').should(someVariable)" },
    ],
    invalid: [
      { code: "cy.get('').should('to.')", errors: [ err ] },
      { code: "cy.get('').should('to.be.visible')", errors: [ err ] },
    ],
  })
})
