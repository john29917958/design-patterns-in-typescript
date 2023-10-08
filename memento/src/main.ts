import { Command } from "./command";
import { Editor } from "./editor";

const editor: Editor = new Editor();
editor.setText("Hello, world!");
editor.setCursor(0, 0);
editor.setSelectionWidth(10);
const helloWorldCommand: Command = new Command(editor);
helloWorldCommand.makeBackup();
editor.setText("My Blog");
editor.setCursor(0, 1);
editor.setSelectionWidth(1);
const myBlogCommand: Command = new Command(editor);
myBlogCommand.makeBackup();
helloWorldCommand.undo();
myBlogCommand.undo();
