import { Button } from "../ui/buttons/button";
import { WinButton } from "../ui/buttons/winButton";
import { Checkbox } from "../ui/checkboxes/checkbox";
import { WinCheckbox } from "../ui/checkboxes/winCheckbox";
import { UIFactory } from "./uiFactory";

class WinUIFactory extends UIFactory {
  public constructor() {
    super();
  }

  public createButton(): Button {
    return new WinButton("gray");
  }

  public createCheckBox(): Checkbox {
    return new WinCheckbox("gray");
  }
}

export { WinUIFactory };
