import { Editor } from "./editor";
import { Snapshot } from "./snapshot";

class Command {
  private backup: Snapshot | null;

  public constructor(private editor: Editor) {
    this.editor = editor;
    this.backup = null;
  }

  public makeBackup(): void {
    this.backup = this.editor.createSnapshot();
  }

  public undo(): void {
    if (this.backup !== null) {
      this.backup.restore();
    }
  }
}

export { Command };
