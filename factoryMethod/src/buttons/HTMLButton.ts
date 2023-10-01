import { Button } from "./button";

class HTMLButton implements Button {
    public onClick: Function | null;

    public constructor() {
        this.onClick = null;
    }

    public click(): void {
        console.log("HTML button is clicked.");
        if (this.onClick !== null) {
            this.onClick.call(this);
        }
    }

    public render(): void {
        console.log("Render HTML button.");
    }
}

export { HTMLButton };
