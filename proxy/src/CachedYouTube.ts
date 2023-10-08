import { ThirdPartyYouTubeLib } from "./thirdPartyYouTubeLib";

class CachedYouTube implements ThirdPartyYouTubeLib {
  private listCache: string[];
  private videoCache: object | null;
  private isNeedReset: boolean;
  private isFileExists: boolean; /* This should check if file exists or not in
    real application. */

  public constructor(private service: ThirdPartyYouTubeLib) {
    this.service = service;
    this.listCache = [];
    this.videoCache = null;
    this.isNeedReset = false;
    this.isFileExists = false;
  }

  public listVideos(): string[] {
    if (this.listCache.length === 0 || this.isNeedReset) {
      console.log("No list cache is found or need reset, get the list cache.");
      this.listCache = this.service.listVideos();
    }
    return this.listCache;
  }

  public getVideoInfo(id: string): object {
    if (this.videoCache === null || this.isNeedReset) {
      console.log(
        "No video cache is found or need reset, get the video cache."
      );
      this.videoCache = this.service.getVideoInfo(id);
    }
    return this.videoCache;
  }

  public downloadVideo(id: string): void {
    if (!this.isFileExists || this.isNeedReset) {
      console.log(
        "No downloaded video is found or need reset, download the video."
      );
      this.service.downloadVideo(id);
      this.isFileExists = true;
    }
  }
}

export { CachedYouTube };
