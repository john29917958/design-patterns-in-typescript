import { Button } from "../buttons/button";
import { WindowsButton } from "../buttons/windowsButton";
import { Dialog } from "./dialog";

class WindowsDialog extends Dialog {
    public render(): void {
        super.render();
        console.log("Render Windows dialog.");
    }

    protected createButton(): Button {
        return new WindowsButton();
    }
}

export { WindowsDialog };
