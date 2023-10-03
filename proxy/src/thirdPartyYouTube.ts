import { ThirdPartyYouTubeLib } from "./thirdPartyYouTubeLib";

class ThirdPartyYouTube implements ThirdPartyYouTubeLib {
  public listVideos(): string[] {
    return ["Video 1", "Video 2", "Vidoe 3"];
  }

  public getVideoInfo(id: string): object {
    return {
      id: id,
      name: "Video Name",
      description: "Video description.",
    };
  }

  public downloadVideo(id: string): void {
    console.log('Downloads video with id "' + id + '"');
  }
}

export { ThirdPartyYouTube };
