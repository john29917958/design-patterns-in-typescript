import { Button } from "../ui/buttons/button";
import { MacButton } from "../ui/buttons/macButton";
import { Checkbox } from "../ui/checkboxes/checkbox";
import { MacCheckbox } from "../ui/checkboxes/macCheckbox";
import { UIFactory } from "./uiFactory";

class MacUIFactory extends UIFactory {
  public constructor() {
    super();
  }

  public createButton(): Button {
    return new MacButton("silver");
  }

  public createCheckBox(): Checkbox {
    return new MacCheckbox("silver");
  }
}

export { MacUIFactory };
