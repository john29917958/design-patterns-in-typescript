import { HTMLButton } from "../buttons/HTMLButton";
import { Button } from "../buttons/button";
import { Dialog } from "./dialog";

class WebDialog extends Dialog {
    public render(): void {
        super.render();
        console.log("Render web dialog.");
    }

    protected createButton(): Button {
        return new HTMLButton();
    }
}

export { WebDialog };
