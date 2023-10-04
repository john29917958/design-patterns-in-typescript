import { AudioPlayer } from "./audioPlayer";

const player: AudioPlayer = new AudioPlayer();
player.clickLock();
player.clickPlay();
player.clickLock();
player.clickPlay();
player.clickNext();
player.clickNext({ isDoubleClick: true });
player.clickPrevious();
player.clickPrevious({ isDoubleClick: true });
player.clickPrevious();
player.clickNext();
player.clickPlay();
