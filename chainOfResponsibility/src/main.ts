import { Button } from "./ui/button";
import { Component } from "./ui/component";
import { Dialog } from "./ui/dialog";
import { Panel } from "./ui/panel";

let dialog = new Dialog("https://www.wikipedia.org/");
let panel = new Panel("This panel does...");
let okButton = new Button();
okButton.toolTipText = "This is an OK button that...";
let cancelButton = new Button();
cancelButton.toolTipText = "This is a cancel button that...";
panel.add(okButton);
panel.add(cancelButton);
dialog.add(panel);
let component: Component = okButton;
component.showHelp();
okButton.toolTipText = "";
component.showHelp();
panel.modalHelpText = "";
component.showHelp();
dialog.wikiPageUrl = "";
component.showHelp();
