import { DataMiner } from "./dataMiner";

class CSVDataMiner extends DataMiner {
  public openFile(path: string): string {
    return "CSV file";
  }

  public extractData(file: string): string {
    return "CSV data";
  }

  public parseData(data: string): string {
    return "Parsed CSV data";
  }
  public closeFile(file: string): void {
    console.log("Close CSV file: " + file + ".");
  }
}

export { CSVDataMiner };
