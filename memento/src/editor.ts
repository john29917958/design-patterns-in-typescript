import { Snapshot } from "./snapshot";

class Editor {
  private text: string;
  private currentX: number;
  private currentY: number;
  private selectionWidth: number;

  public constructor() {
    this.text = "";
    this.currentX = 0;
    this.currentY = 0;
    this.selectionWidth = 0;
  }

  public setText(text: string): void {
    this.text = text;
  }

  public setCursor(x: number, y: number): void {
    this.currentX = x;
    this.currentY = y;
  }

  public setSelectionWidth(width: number): void {
    this.selectionWidth = width;
  }

  public createSnapshot(): Snapshot {
    return new Snapshot(
      this,
      this.text,
      this.currentX,
      this.currentY,
      this.selectionWidth
    );
  }
}

export { Editor };
