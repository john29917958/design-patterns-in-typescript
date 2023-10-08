interface ThirdPartyYouTubeLib {
  listVideos(): string[];

  getVideoInfo(id: string): object;

  downloadVideo(id: string): void;
}

export { ThirdPartyYouTubeLib };
