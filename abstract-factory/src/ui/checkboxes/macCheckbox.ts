import { Checkbox } from "./checkbox";

class MacCheckbox extends Checkbox {
  public constructor(protected _themeColor: string) {
    super(_themeColor);
  }
}

export { MacCheckbox };
