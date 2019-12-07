import { args } from "../utils/args"
import spawn = require("cross-spawn")

spawn.sync("react-scripts", ["build", ...args()], {
  stdio: "inherit",
  env: {
    ...process.env,
    EXTEND_ESLINT: "true",
  },
})
