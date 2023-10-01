import { AuthenticationDialog } from "./authenticationDialog";

const authDialog: AuthenticationDialog = new AuthenticationDialog();
authDialog.loginOrRegisterCheckBox.check();
authDialog.loginUsernameInput.click();
authDialog.loginUsernameInput.keypress();
authDialog.loginPasswordInput.click();
authDialog.loginPasswordInput.keypress();
authDialog.rememberMeCheckbox.check();
authDialog.okButton.click();
