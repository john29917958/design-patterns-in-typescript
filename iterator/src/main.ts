import { Application } from "./application";
import { Profile } from "./profile";

let app: Application = new Application("Facebook");
app.config();
console.log("Send spam to Facebook friends.");
app.sendSpamToFriends(new Profile("1", "1@gmail.com"));
console.log("Send spam to Facebook co-workers.");
app.sendSpamToCoworkers(new Profile("2", "2@gmail.com"));
app = new Application("LinkedIn");
app.config();
console.log("Send spam to LinkedIn friends.");
app.sendSpamToFriends(new Profile("3", "3@gmail.com"));
console.log("Send spam to LinkedIn co-workers.");
app.sendSpamToCoworkers(new Profile("4", "4@gmail.com"));
