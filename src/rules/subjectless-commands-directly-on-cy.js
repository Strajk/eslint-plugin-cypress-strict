import * as helpers from "./../common/helpers"

const COMMANDS = [
  "get",
  "wait",
  "visit",

  "setCookie",
  "removeCookie",

  "url",

  "viewport",
]

export default {
  meta: {
    messages: {
      subjectlessCommandsDirectlyOnCy: "Prefer chaining subject-less commands directly on 'cy'",
    },
  },
  create: context => {
    return {
      ExpressionStatement (node) {
        let pointer = node.expression
        while (pointer.type === "CallExpression") {
          // TODO: Explain
          if (pointer.callee.type !== "MemberExpression") break

          if (
            pointer.callee.property.type === "Identifier" &&
            COMMANDS.includes(pointer.callee.property.name)
          ) {
            if (pointer.callee.object.type === "Identifier") {
              if (pointer.callee.object.name === "cy") {
                // cy.get() – how it should be!
              } else {
                // notCy.get() – we don't care ¯\_(ツ)_/¯
              }
            } else {
              if (helpers.isRootCy(pointer.callee.object)) {
                context.report({
                  loc: {
                    line: pointer.callee.property.loc.start.line,
                    column: pointer.callee.property.loc.start.column,
                  },
                  messageId: "subjectlessCommandsDirectlyOnCy",
                })
              } else {
                // notCy.something.get() - we don't care ¯\_(ツ)_/¯
              }
            }
          }
          pointer = pointer.callee.object
        }
      },
    }
  },
}
