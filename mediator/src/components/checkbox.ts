import { Mediator } from "../mediator";
import { Component } from "./component";

class Checkbox extends Component {
  public get isChecked() {
    return this._isChecked;
  }

  private _isChecked: boolean;

  public constructor(protected dialog: Mediator) {
    super(dialog);
    this._isChecked = true;
  }

  public check(): void {
    this.dialog.notify(this, "check");
  }
}

export { Checkbox };
