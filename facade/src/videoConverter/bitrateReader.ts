import { CompressionCodec } from "./compressionCodec";

class BitrateReader {
  static convert(buffer: Buffer, destinationCodec: CompressionCodec): string {
    return "Conversion result";
  }
  static read(filename: string, sourceCodec: string): Buffer {
    return Buffer.from("source codec buffer");
  }
}

export { BitrateReader };
