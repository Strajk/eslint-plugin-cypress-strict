function isRootCy (node) {
  while (node.type === "CallExpression") {
    // TODO: Explain
    if (node.callee.type !== "MemberExpression") return false

    if (
      node.callee.object.type === "Identifier" &&
      node.callee.object.name === "cy"
    ) {
      return true
    }

    node = node.callee.object
  }
  return false
}

export default {
  meta: {
    messages: {
      unchainedGet: "Prefer chaining '.get()' directly on 'cy'",
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
            pointer.callee.property.name === "get"
          ) {
            if (pointer.callee.object.type === "Identifier") {
              if (pointer.callee.object.name === "cy") {
                // cy.get() – how it should be!
              } else {
                // notCy.get() – we don't care ¯\_(ツ)_/¯
              }
            } else {
              if (isRootCy(pointer.callee.object)) {
                context.report({
                  loc: {
                    line: pointer.callee.property.loc.start.line,
                    column: pointer.callee.property.loc.start.column,
                  },
                  messageId: "unchainedGet",
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
};
