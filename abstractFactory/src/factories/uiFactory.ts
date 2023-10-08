import { Button } from "../ui/buttons/button";
import { Checkbox } from "../ui/checkboxes/checkbox";

abstract class UIFactory {
  protected constructor() {}

  public abstract createButton(): Button;

  public abstract createCheckBox(): Checkbox;
}

export { UIFactory };
