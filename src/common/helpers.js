export function isRootCy (node) {
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
