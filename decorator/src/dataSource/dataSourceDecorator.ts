import { DataSource } from "./dataSource";

abstract class DataSourceDecorator implements DataSource {
    protected constructor(protected wrappee: DataSource) {
        this.wrappee = wrappee;
    }

    writeData(data: string): void {
        this.wrappee.writeData(data);
    }

    readData(): string {
        return this.wrappee.readData();
    }
}

export { DataSourceDecorator };
