import { VideoConverter } from "./videoConverter/videoConverter";

const converter: VideoConverter = new VideoConverter();
const mp4: string = converter.convert("video.ogg", "mp4");
