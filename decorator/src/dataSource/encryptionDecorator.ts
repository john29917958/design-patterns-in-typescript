import { DataSource } from "./dataSource";
import { DataSourceDecorator } from "./dataSourceDecorator";

class EncryptionDecorator extends DataSourceDecorator {
    public constructor(protected wrappee: DataSource) {
        super(wrappee);
    }

    writeData(data: string): void {
        console.log("Encrypt the data before writing.");
        this.wrappee.writeData(data);
    }

    readData(): string {
        const data = this.wrappee.readData();
        console.log("Decrypt the data after reading");
        return data;
    }
}

export { EncryptionDecorator };
