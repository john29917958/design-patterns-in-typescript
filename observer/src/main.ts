import { Editor } from "./editor";
import { EmailAlertsListener } from "./eventListeners/emailAlertsListener";
import { LoggingListener } from "./eventListeners/loggingListener";
import * as fs from "fs";

const editor: Editor = new Editor();
const logFilePath: string = __dirname + "/log";
fs.truncateSync(logFilePath);
const openFileLoggingListener: LoggingListener = new LoggingListener(
  logFilePath,
  "Someone has opened the file: %s."
);
editor.events.subscribe("open", openFileLoggingListener);
const filePath: string = __dirname + "/../file";
const saveFileLoggingListener: LoggingListener = new LoggingListener(
  logFilePath,
  "Someone has saved the file: %s."
);
editor.events.subscribe("save", saveFileLoggingListener);
const openFileEmailListener: EmailAlertsListener = new EmailAlertsListener(
  "abc@example.com",
  "Someone has opened the file: %s."
);
editor.events.subscribe("open", openFileEmailListener);
const saveFileEmailListener: EmailAlertsListener = new EmailAlertsListener(
  "abc@example.com",
  "Someone has saved the file: %s."
);
editor.events.subscribe("save", saveFileEmailListener);
editor.openFile(filePath);
editor.saveFile();
editor.events.unsubscribe("open", openFileLoggingListener);
editor.events.unsubscribe("save", saveFileLoggingListener);
editor.openFile(filePath);
editor.saveFile();
