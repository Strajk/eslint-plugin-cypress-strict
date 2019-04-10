/* eslint-env jest */

import ruleTester from "../../common/ruleTester"
import unchainedGet from "../unchained-get"

const errors = [{ messageId: "unchainedGet" }]

describe("Unchained get", function () {
  ruleTester.run("unchained-get", unchainedGet, {
    valid: [
      { code: "cy.get('h1')" },
      { code: "cy.wait(1)" },
      { code: "notCy.get(1000)" },
      { code: "notCy.someProperty.get(1000)" },
      { code: "notCy.someMethod().get(1000)" },
    ],
    invalid: [
      { code: "cy.wait(1).get('h2')", errors },
      { code: "cy.wait(1).get('h2').wait(2)", errors },
    ],
  })
})
