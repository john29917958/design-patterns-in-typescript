import { Button } from "./button";

class MacButton extends Button {
  public constructor(protected _themeColor: string) {
    super(_themeColor);
  }
}

export { MacButton };
