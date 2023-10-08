import * as fs from "fs";
import { DataSource } from "./dataSource";

class FileDataSource implements DataSource {
    public constructor(private filePath: string) {
        this.filePath = filePath;
    }

    writeData(data: string): void {
        fs.writeFileSync(this.filePath, data);
        console.log("Wrote data to file " + this.filePath);
    }

    readData(): string {
        const data = fs.readFileSync(this.filePath, "utf-8");
        console.log("Read data from file " + this.filePath);
        return data;
    }
}

export { FileDataSource };
