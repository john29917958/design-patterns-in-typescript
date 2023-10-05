import { AudioPlayer } from "../audioPlayer";
import { ClickEvent } from "../clickEvent";
import { PlayingState } from "./playingState";
import { ReadyState } from "./readyState";
import { State } from "./state";

class LockedState extends State {
  public constructor(player: AudioPlayer) {
    super(player);
  }

  public clickLock(): void {
    if (this.player.isPlaying) {
      this.player.changeState(new PlayingState(this.player));
    } else {
      this.player.changeState(new ReadyState(this.player));
    }
  }

  public clickPlay(): void {
    // Locked, so do nothing.
  }

  public clickNext(clickEvent?: ClickEvent): void {
    // Locked, so do nothing.
  }

  public clickPrevious(clickEvent?: ClickEvent): void {
    // Locked, so do nothing.
  }
}

export { LockedState };
