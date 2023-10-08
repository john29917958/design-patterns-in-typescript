import { Button } from "./components/button";
import { Checkbox } from "./components/checkbox";
import { Component } from "./components/component";
import { Textbox } from "./components/textBox";
import { Mediator } from "./mediator";

class AuthenticationDialog implements Mediator {
  public get loginOrRegisterCheckBox() {
    return this._loginOrRegisterCheckBox;
  }

  public get loginUsernameInput() {
    return this._loginUsernameInput;
  }

  public get loginPasswordInput() {
    return this._loginPasswordInput;
  }

  public get rememberMeCheckbox() {
    return this._rememberMeCheckbox;
  }

  public get okButton() {
    return this._okButton;
  }

  private title: string;
  private _loginOrRegisterCheckBox: Checkbox;
  private _loginUsernameInput: Textbox;
  private _loginPasswordInput: Textbox;
  private _regUsernameInput: Textbox;
  private _regPasswordInput: Textbox;
  private _regEmailInput: Textbox;
  private _okButton: Button;
  private _cancelButton: Button;
  private _rememberMeCheckbox: Checkbox;

  public constructor() {
    this.title = "";
    this._loginOrRegisterCheckBox = new Checkbox(this);
    this._loginUsernameInput = new Textbox(this);
    this._loginPasswordInput = new Textbox(this);
    this._regUsernameInput = new Textbox(this);
    this._regPasswordInput = new Textbox(this);
    this._regEmailInput = new Textbox(this);
    this._okButton = new Button(this);
    this._cancelButton = new Button(this);
    this._rememberMeCheckbox = new Checkbox(this);
  }

  public notify(sender: Component, event: string): void {
    if (sender === this._loginOrRegisterCheckBox) {
      if (event === "check") {
        this.title = "Log in";
        console.log("Show login form components.");
        this.loginUsernameInput.isVisible = true;
        this.loginPasswordInput.isVisible = true;
        this._rememberMeCheckbox.isVisible = true;
        console.log("Hide registration form components.");
        this._regUsernameInput.isVisible = false;
        this._regPasswordInput.isVisible = false;
        this._regEmailInput.isVisible = false;
      } else {
        this.title = "Register";
        console.log("Show registration form components.");
        this._regUsernameInput.isVisible = true;
        this._regPasswordInput.isVisible = true;
        this._regEmailInput.isVisible = true;
        console.log("Hide login form components.");
        this.loginUsernameInput.isVisible = false;
        this.loginPasswordInput.isVisible = false;
        this._rememberMeCheckbox.isVisible = false;
      }
    } else if (sender === this._okButton) {
      if (event === "click") {
        if (this._loginOrRegisterCheckBox.isChecked) {
          console.log("Perform login operation.");
        } else {
          console.log("Perform registration operation.");
        }
      }
    } else {
      // Do nothing.
    }
  }
}

export { AuthenticationDialog };
