import { Button } from "./button";

class WinButton extends Button {
  public constructor(protected _themeColor: string) {
    super(_themeColor);
  }
}

export { WinButton };
