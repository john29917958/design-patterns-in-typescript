import { CachedYouTube } from "./CachedYouTube";
import { ThirdPartyYouTube } from "./thirdPartyYouTube";
import { ThirdPartyYouTubeLib } from "./thirdPartyYouTubeLib";
import { YouTubeManager } from "./youTubeManager";

const youTubeService: ThirdPartyYouTubeLib = new ThirdPartyYouTube();
const youTubeProxy: ThirdPartyYouTubeLib = new CachedYouTube(youTubeService);
const youTubeManager: YouTubeManager = new YouTubeManager(youTubeProxy);
youTubeManager.reactOnUserInput("1");
youTubeManager.reactOnUserInput("1");
