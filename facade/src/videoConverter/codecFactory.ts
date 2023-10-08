import { VideoFile } from "./videoFile";

class CodedFactory {
  public extract(file: VideoFile): string {
    return "source codec";
  }
}

export { CodedFactory };
