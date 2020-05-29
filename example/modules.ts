import { RunspaceRuntime } from "../src";
const runtime = new RunspaceRuntime({});

runtime
  .runScript(
    `
        const fetch = require("node-fetch");
        const { hostname } = require("os");
        module.exports = async (context, callback) => { 
            const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
            const currentprice = await res.json();
            callback({hostname: hostname(), ...currentprice});
        } 
   `,
  )
  .then(console.log)
  .catch(console.error);
