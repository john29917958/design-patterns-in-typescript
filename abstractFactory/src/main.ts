import { MacUIFactory } from "./factories/macUIFactory";
import { UIFactory } from "./factories/uiFactory";
import { WinUIFactory } from "./factories/winUIFactory";
import { Button } from "./ui/buttons/button";
import { Checkbox } from "./ui/checkboxes/checkbox";

let uiFactory: UIFactory = new WinUIFactory();
let button: Button = uiFactory.createButton();
let checkbox: Checkbox = uiFactory.createCheckBox();
uiFactory = new MacUIFactory();
button = uiFactory.createButton();
checkbox = uiFactory.createCheckBox();
