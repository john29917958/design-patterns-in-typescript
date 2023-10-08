import { ThirdPartyYouTubeLib } from "./thirdPartyYouTubeLib";

class YouTubeManager {
  public constructor(protected service: ThirdPartyYouTubeLib) {
    this.service = service;
  }

  public renderVideoPage(id: string): void {
    const info: object = this.service.getVideoInfo(id);
    console.log("Render the video page", info);
  }

  public renderListPanel(): void {
    const list: string[] = this.service.listVideos();
    console.log("Render the list of video thumbnails", list);
  }

  public reactOnUserInput(id: string): void {
    this.renderVideoPage(id);
    this.renderListPanel();
  }
}

export { YouTubeManager };
