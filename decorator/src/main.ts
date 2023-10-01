import { CompressionDecorator } from "./dataSource/compressionDecorator";
import { EncryptionDecorator } from "./dataSource/encryptionDecorator";
import { FileDataSource } from "./dataSource/fileDataSource";

const dataSource = new EncryptionDecorator(new CompressionDecorator(
    new FileDataSource(__dirname + "/../file")));
let data = dataSource.readData();
data = "Hello, world!\n";
dataSource.writeData(data);
