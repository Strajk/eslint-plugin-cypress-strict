import subjectlessCommandsDirectlyOnCy from "./rules/subjectless-commands-directly-on-cy"
import selectorsOverCommands from "./rules/selectors-over-commands"

const res = {
  rules: {
    "subjectless-commands-directly-on-cy": subjectlessCommandsDirectlyOnCy,
    "selectors-over-commands": selectorsOverCommands,
  },
  configs: {
    recommended: {
      plugins: ["cypress-strict"],
      rules: {
        "cypress-strict/subjectless-commands-directly-on-cy": "error",
        "cypress-strict/selectors-over-commands": "error",
      },
    },
  },
}

export default res

// TODO: Make it so this "coro-moro" is not needed
module.exports = res
