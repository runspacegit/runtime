import { RunspaceRuntime } from "../src";
const runtime = new RunspaceRuntime({ messagePrefix: "Hello, World!" });

runtime
  .runScript(
    "module.exports = (context, callback) => { console.info(context.messagePrefix); callback(context.messagePrefix)  } ",
  )
  .then(console.log)
  .catch(console.error);
