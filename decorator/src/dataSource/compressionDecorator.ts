import { DataSource } from "./dataSource";
import { DataSourceDecorator } from "./dataSourceDecorator";

class CompressionDecorator extends DataSourceDecorator {
    public constructor(protected wrappee: DataSource) {
        super(wrappee);
    }

    writeData(data: string): void {
        console.log("Compress the data before writing.");
        this.wrappee.writeData(data);
    }

    readData(): string {
        const data: string = this.wrappee.readData();
        console.log("Decompress the data after reading.");
        return data;
    }
}

export { CompressionDecorator };
