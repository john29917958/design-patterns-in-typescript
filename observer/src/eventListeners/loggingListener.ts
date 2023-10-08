import { EventListener } from "./eventListener";
import * as fs from "fs";

class LoggingListener implements EventListener {
  public constructor(private logFilePath: string, private message: string) {
    this.logFilePath = logFilePath;
    this.message = message;
  }

  public update(filename: string): void {
    const content = this.message.replace("%s", filename) + "\n";
    fs.writeFileSync(this.logFilePath, content, { flag: "a" });
  }
}

export { LoggingListener };
