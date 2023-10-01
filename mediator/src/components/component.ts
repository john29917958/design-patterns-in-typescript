import { Mediator } from "../mediator";

class Component {
  public isVisible: boolean;

  public constructor(protected dialog: Mediator) {
    this.dialog = dialog;
    this.isVisible = true;
  }

  public click(): void {
    this.dialog.notify(this, "click");
  }

  public keypress(): void {
    this.dialog.notify(this, "keypress");
  }
}

export { Component };
