import * as helpers from "./../common/helpers"

// https://github.com/cypress-io/cypress/blob/develop/packages/driver/src/cy/commands/traversals.coffee#L5
const COMMANDS = [
  // Traversing up = Allowed
  // "closest"
  // "parent",
  // "parents",
  // "parentsUntil",

  // Traversing sides = Allowed
  // "siblings",
  // "next",
  // "nextAll",
  // "nextUntil",
  // "prev",
  // "prevAll",
  // "prevUntil",

  // Traversing down = Disallowed
  "children", // `a > b`
  "find", // `a b`

  // Filtering simple = Disallowed
  "eq", // `a:eq(1)`
  "first", // `a:first()`
  "last", // `a:last()`
  "not", // `a:not(...)`

  // Filtering complex = Allowed
  // "filter", // Allowed
]

export default {
  meta: {
    messages: {
      selectorsOverCommands: "Prefer CSS selectors over Cypress commands",
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
            if (helpers.isRootCy(pointer.callee.object, x => x.name !== "wrap")) {

              // Allow children without arguments
              // TODO: Nicer
              if (
                pointer.callee.property.name === "children" &&
                pointer.arguments.length === 0
              ) break

              context.report({
                loc: {
                  line: pointer.callee.property.loc.start.line,
                  column: pointer.callee.property.loc.start.column,
                },
                messageId: "selectorsOverCommands",
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
