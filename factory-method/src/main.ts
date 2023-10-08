import { Dialog } from "./dialogs/dialog";
import { WebDialog } from "./dialogs/webDialog";
import { WindowsDialog } from "./dialogs/windowsDialog";

let dialog: Dialog = new WebDialog();
dialog.render();
dialog = new WindowsDialog();
dialog.render();
