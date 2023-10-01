import { System } from "../system";
import { EventListener } from "./eventListener";

class EmailAlertsListener implements EventListener {
  public constructor(private email: string, private message: string) {
    this.email = email;
    this.message = message;
  }

  public update(filename: string): void {
    const content = this.message.replace("%s", filename);
    System.email(this.email, content);
  }
}

export { EmailAlertsListener };
