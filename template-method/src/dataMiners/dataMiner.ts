abstract class DataMiner {
  public mine(path: string) {
    const file: string = this.openFile(path);
    const data: string = this.extractData(file);
    const parsedData: string = this.parseData(data);
    const analyzedData: string = this.analyzeData(parsedData);
    this.sendReport(analyzedData);
    this.closeFile(file);
  }

  public abstract openFile(path: string): string;

  public abstract extractData(file: string): string;

  public abstract parseData(data: string): string;

  public analyzeData(data: string): string {
    const analyzedData: string = data;
    return analyzedData;
  }

  public sendReport(data: string): void {
    console.log("Send report with data: " + data);
  }

  public abstract closeFile(file: string): void;
}

export { DataMiner };
