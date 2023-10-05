import { BitrateReader } from "./bitrateReader";
import { CodedFactory } from "./codecFactory";
import { CompressionCodec } from "./compressionCodec";
import { MPEG4CompressionCodec } from "./mpeg4CompressionCodec";
import { OggCompressionCoded } from "./oggCompressionCodec";
import { VideoFile } from "./videoFile";

class VideoConverter {
  public convert(filename: string, format: string): string {
    const file: VideoFile = new VideoFile(filename);
    const sourceCodec = new CodedFactory().extract(file);
    let destinationCodec: CompressionCodec;
    if (format === "mp4") {
      destinationCodec = new MPEG4CompressionCodec();
    } else {
      destinationCodec = new OggCompressionCoded();
    }
    const buffer: Buffer = BitrateReader.read(filename, sourceCodec);
    let result = BitrateReader.convert(buffer, destinationCodec);
    return result;
  }
}

export { VideoConverter };
