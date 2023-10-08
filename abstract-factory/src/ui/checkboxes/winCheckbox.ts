import { Checkbox } from "./checkbox";

class WinCheckbox extends Checkbox {
  public constructor(protected _themeColor: string) {
    super(_themeColor);
  }
}

export { WinCheckbox };
