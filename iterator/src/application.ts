import { Facebook } from "./socialNetworks/facebook";
import { Profile } from "./profile";
import { ProfileIterator } from "./iterators/profileIterator";
import { SocialSpammer } from "./socialSpammer";
import { SocialNetwork } from "./socialNetworks/socialNetwork";
import { LinkedIn } from "./socialNetworks/linkedIn";

class Application {
  private spammer: SocialSpammer | null;
  private network: SocialNetwork | null;

  public constructor(private networkName: string) {
    this.networkName = networkName;
    this.network = null;
    this.spammer = null;
  }

  public config(): void {
    switch (this.networkName) {
      case "Facebook":
        this.network = new Facebook();
        break;
      case "LinkedIn":
        this.network = new LinkedIn();
        break;
      default:
        throw new Error('Unsupported network "' + this.networkName + '".');
    }
    this.spammer = new SocialSpammer();
  }

  public sendSpamToFriends(profile: Profile) {
    if (this.network !== null && this.spammer !== null) {
      const iterator: ProfileIterator = this.network.createFriendsIterator(
        profile.getId()
      );
      this.spammer.send(iterator, "Very important message.");
    }
  }

  public sendSpamToCoworkers(profile: Profile) {
    if (this.network !== null && this.spammer !== null) {
      const iterator: ProfileIterator = this.network.createCoworkersIterator(
        profile.getId()
      );
      this.spammer.send(iterator, "Very important message.");
    }
  }
}

export { Application };
