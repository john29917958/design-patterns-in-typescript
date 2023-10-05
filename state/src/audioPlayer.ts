import { ClickEvent } from "./clickEvent";
import { ReadyState } from "./states/readyState";
import { State } from "./states/state";

class AudioPlayer {
  public isPlaying: boolean;

  private state: State | null;
  private ui: object;
  private volumn: number;
  private playlist: string[];
  private currentSong: string;

  public constructor() {
    this.state = new ReadyState(this);
    this.ui = {};
    this.volumn = 0;
    this.playlist = ["Song 1", "Song 2", "Song 3"];
    this.currentSong = "";
    this.isPlaying = false;
  }

  public changeState(state: State): void {
    this.state = state;
  }

  public clickLock(): void {
    this.state?.clickLock();
  }

  public clickPlay(): void {
    this.state?.clickPlay();
  }

  public clickNext(clickEvent?: ClickEvent): void {
    this.state?.clickNext(clickEvent);
  }

  public clickPrevious(clickEvent?: ClickEvent): void {
    this.state?.clickPrevious(clickEvent);
  }

  public startPlayback(): void {
    if (this.currentSong === "") {
      this.currentSong = this.playlist[0];
    }
    this.isPlaying = true;
  }

  public stopPlayback(): void {
    this.isPlaying = false;
  }

  public nextSong(): void {
    if (this.currentSong === "") {
      this.currentSong = this.playlist[0];
    } else if (this.currentSong === this.playlist[this.playlist.length - 1]) {
      this.currentSong = this.playlist[0];
    } else {
      const currSongIndex = this.playlist.findIndex(
        (song) => song === this.currentSong
      );
      this.currentSong = this.playlist[currSongIndex + 1];
    }
  }

  public previousSong(): void {
    if (this.currentSong === "") {
      this.currentSong = this.playlist[0];
    } else if (this.currentSong === this.playlist[0]) {
      this.currentSong = this.playlist[this.playlist.length - 1];
    } else {
      const currSongIndex = this.playlist.findIndex(
        (song) => song === this.currentSong
      );
      this.currentSong = this.playlist[currSongIndex - 1];
    }
  }

  public fastForward(seconds: number): void {
    console.log("Fast forward " + seconds + " second(s).");
  }

  public rewind(seconds: number): void {
    console.log("Rewind " + seconds + " second(s).");
  }
}

export { AudioPlayer };
