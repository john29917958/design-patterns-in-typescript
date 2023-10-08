import { DataMiner } from "./dataMiner";

class DocDataMiner extends DataMiner {
  public openFile(path: string): string {
    return "Doc file";
  }

  public extractData(file: string): string {
    return "Doc data";
  }

  public parseData(data: string): string {
    return "Parsed doc data";
  }
  public closeFile(file: string): void {
    console.log("Close doc file: " + file + ".");
  }
}

export { DocDataMiner };
