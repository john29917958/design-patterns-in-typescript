import { AudioPlayer } from "../audioPlayer";
import { ClickEvent } from "../clickEvent";

abstract class State {
  protected constructor(protected player: AudioPlayer) {
    this.player = player;
  }

  public abstract clickLock(): void;
  public abstract clickPlay(): void;
  public abstract clickNext(clickEvent?: ClickEvent): void;
  public abstract clickPrevious(clickEvent?: ClickEvent): void;
}

export { State };
