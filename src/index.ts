import "source-map-support/register";
import { NodeVM } from "vm2";
import { tmpdir } from "os";

export interface FunctionReturn {
  log: string;
  data: any;
}

export class RunspaceRuntime {
  private vm: NodeVM;
  private context: object;
  constructor(context: object) {
    this.context = context;
    this.vm = new NodeVM({
      console: "redirect",
      require: {
        external: true,
        builtin: ["fs", "path", "node-fetch", "os", "child_process"],
        root: tmpdir(),
      },
    });
  }

  public runScript(script: string): Promise<FunctionReturn> {
    return new Promise((resolve, reject) => {
      let log: string[] = [];
      const r = (...args: any[]): void => {
        resolve({
          log: log.join("\n"),
          data: args,
        });
      };
      try {
        const func = this.vm.run(script);
        this.vm.on(
          "console.debug",
          (...args: any[]) => (log = [...log, ...args]),
        );
        this.vm.on(
          "console.log",
          (...args: any[]) => (log = [...log, ...args]),
        );
        this.vm.on(
          "console.info",
          (...args: any[]) => (log = [...log, ...args]),
        );
        this.vm.on(
          "console.warn",
          (...args: any[]) => (log = [...log, ...args]),
        );
        this.vm.on(
          "console.error",
          (...args: any[]) => (log = [...log, ...args]),
        );
        this.vm.on(
          "console.dir",
          (...args: any[]) => (log = [...log, ...args]),
        );
        this.vm.on(
          "console.trace",
          (...args: any[]) => (log = [...log, ...args]),
        );
        func(this.context, r);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default RunspaceRuntime;
