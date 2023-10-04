import { AudioPlayer } from "../audioPlayer";
import { ClickEvent } from "../clickEvent";
import { LockedState } from "./lockedState";
import { ReadyState } from "./readyState";
import { State } from "./state";

class PlayingState extends State {
  public constructor(player: AudioPlayer) {
    super(player);
  }

  public clickLock(): void {
    this.player.changeState(new LockedState(this.player));
  }

  public clickPlay(): void {
    this.player.stopPlayback();
    this.player.changeState(new ReadyState(this.player));
  }

  public clickNext(clickEvent?: ClickEvent): void {
    if (clickEvent?.isDoubleClick) {
      this.player.fastForward(5);
    } else {
      this.player.nextSong();
    }
  }

  public clickPrevious(clickEvent?: ClickEvent): void {
    if (clickEvent?.isDoubleClick) {
      this.player.rewind(5);
    } else {
      this.player.previousSong();
    }
  }
}

export { PlayingState };
