import { Button } from "../buttons/button";

abstract class Dialog {
    protected abstract createButton(): Button;

    public closeDialog(): void {
        console.log("Close the dialog.");
    }

    public render(): void {
        const button: Button = this.createButton();
        button.onClick = this.closeDialog;
        button.render();
    }
}

export { Dialog };
