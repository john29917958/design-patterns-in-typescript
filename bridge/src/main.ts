import { AdvancedFan } from "./devices/advancedFan";
import { BasicFan } from "./devices/basicFan";
import { Fan } from "./devices/fan";
import { AdvancedRemote } from "./remotes/advancedRemote";
import { BasicRemote } from "./remotes/basicRemote";
import { Remote } from "./remotes/remote";

let fan: Fan = new BasicFan("Basic Fan");
let remote: Remote = new BasicRemote(fan);
remote.enable();
remote.disable();
fan = new AdvancedFan("Advanced Fan");
remote = new BasicRemote(fan);
remote.enable();
remote.disable();
fan = new BasicFan("Basic Fan");
remote = new AdvancedRemote(fan);
remote.enable();
remote.disable();
fan = new AdvancedFan("Advanced Fan");
remote = new AdvancedRemote(fan);
remote.enable();
remote.disable();