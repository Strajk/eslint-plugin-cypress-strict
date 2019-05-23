/* eslint-env jest */

import ruleTester from "../../common/ruleTester"
import selectorsOverCommands from "../selectors-over-commands"

const err = { messageId: "selectorsOverCommands" }

describe("selectorsOverCommands", function () {
  ruleTester.run("selectors-over-commands", selectorsOverCommands, {
    valid: [
      { code: "cy.get('')" },
      { code: "cy.get('').parent()" },
      { code: "cy.get('').siblings()" },
      { code: "cy.get('').filter()" },

      { code: "cy.get('').children()" },

      { code: "cy.wrap('').first()" },
      { code: "cy.wrap('').find('')" },

      { code: "notCy.first()" },
    ],
    invalid: [
      { code: "cy.get('').first()", errors: [ err ] },

      { code: "cy.get('').children('')" },
      { code: "cy.get('').children('a')" },

      { code: "cy.get('').not().first()", errors: [err, err] },
      { code: "cy.get('').find().not().eq()", errors: [err, err, err] },
      { code: "cy.get('').first().click()", errors: [ err ] },
    ],
  })
})
