import { AudioPlayer } from "../audioPlayer";
import { ClickEvent } from "../clickEvent";
import { LockedState } from "./lockedState";
import { PlayingState } from "./playingState";
import { State } from "./state";

class ReadyState extends State {
  public constructor(player: AudioPlayer) {
    super(player);
  }

  public clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }

  public clickPlay(): void {
    this.player.startPlayback();
    this.player.changeState(new PlayingState(this.player));
  }

  public clickNext(clickEvent?: ClickEvent): void {
    this.player.nextSong();
  }

  public clickPrevious(clickEvent?: ClickEvent): void {
    this.player.previousSong();
  }
}

export { ReadyState };
