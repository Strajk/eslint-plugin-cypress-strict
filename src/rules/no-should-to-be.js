import * as helpers from "./../common/helpers"

export default {
  meta: {
    messages: {
      noShouldToBe: "Use 'should(\"be.something\")' instead of 'should(\"to.be.something\")'",
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
            pointer.callee.property.name === "should" &&
            pointer.arguments[0] &&
            pointer.arguments[0].type === "Literal" &&
            pointer.arguments[0].value.startsWith("to.")
          ) {
            if (helpers.isRootCy(pointer.callee.object)) {
              context.report({
                loc: {
                  line: pointer.callee.property.loc.start.line,
                  column: pointer.callee.property.loc.start.column,
                },
                messageId: "noShouldToBe",
              })
            } else {
              // notCy.something.get() - we don't care ¯\_(ツ)_/¯
            }
          }
          pointer = pointer.callee.object
        }
      },
    }
  },
}
