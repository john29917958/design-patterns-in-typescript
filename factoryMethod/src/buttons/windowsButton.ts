import { Button } from "./button";

class WindowsButton implements Button {
    public onClick: Function | null;

    public constructor() {
        this.onClick = null;
    }

    public click(): void {
        console.log("Windows button is clicked.");
        if (this.onClick !== null) {
            this.onClick.call(this);
        }
    }

    public render(): void {
        console.log("Render Windows button.");
    }
}

export { WindowsButton };
