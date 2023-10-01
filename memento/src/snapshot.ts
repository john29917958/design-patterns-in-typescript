import { Editor } from "./editor";

class Snapshot {
  public constructor(
    private editor: Editor,
    private text: string,
    private currentX: number,
    private currentY: number,
    private selectionWidth: number
  ) {
    this.editor = editor;
    this.text = text;
    this.currentX = currentX;
    this.currentY = currentY;
    this.selectionWidth = selectionWidth;
  }

  public restore(): void {
    this.editor.setText(this.text);
    this.editor.setCursor(this.currentX, this.currentY);
    this.editor.setSelectionWidth(this.selectionWidth);
  }
}

export { Snapshot };
