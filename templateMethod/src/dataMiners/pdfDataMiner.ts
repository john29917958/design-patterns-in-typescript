import { DataMiner } from "./dataMiner";

class PDFDataMiner extends DataMiner {
  public openFile(path: string): string {
    return "PDF file";
  }

  public extractData(file: string): string {
    return "PDF data";
  }

  public parseData(data: string): string {
    return "Parsed PDF data";
  }
  public closeFile(file: string): void {
    console.log("Close PDF file: " + file + ".");
  }
}

export { PDFDataMiner };
