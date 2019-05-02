export function isRootCy (node, propertyCheck) {
  while (node.type === "CallExpression") {
    // TODO: Explain
    if (node.callee.type !== "MemberExpression") return false

    if (
      node.callee.object.type === "Identifier" &&
      node.callee.object.name === "cy"
    ) {
      if (!propertyCheck) return true
      return propertyCheck(node.callee.property)
    }

    node = node.callee.object
  }
  return false
}
