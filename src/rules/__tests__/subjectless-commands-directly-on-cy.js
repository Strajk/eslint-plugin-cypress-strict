/* eslint-env jest */

import ruleTester from "../../common/ruleTester"
import subjectlessCommandsDirectlyOnCy from "../subjectless-commands-directly-on-cy"

const errors = [{ messageId: "subjectlessCommandsDirectlyOnCy" }]

describe("subjectlessCommandsDirectlyOnCy", function () {
  ruleTester.run("subjectless-commands-directly-on-cy", subjectlessCommandsDirectlyOnCy, {
    valid: [
      { code: "cy.get('h1')" },
      { code: "cy.wait(1)" },
      { code: "notCy.get(1000)" },
      { code: "notCy.someProperty.get(1000)" },
      { code: "notCy.someMethod().get(1000)" },
    ],
    invalid: [
      { code: "cy.something(1).get('h2')", errors },
      { code: "cy.something(1).get('h2').something(2)", errors },
    ],
  })
})
