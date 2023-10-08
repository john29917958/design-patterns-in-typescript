import { EventManager } from "./eventManager";
import * as fs from "fs";
import * as path from "path";

class Editor {
  public events: EventManager;
  private filePath: string;

  public constructor() {
    this.events = new EventManager();
    this.filePath = "";
  }

  public openFile(filePath: string): void {
    const descriptor = fs.openSync(filePath, "r");
    this.filePath = filePath;
    const fileName = path.basename(filePath);
    this.events.notify("open", fileName);
  }

  public saveFile(): void {
    this.events.notify("save", this.filePath);
  }
}

export { Editor };
