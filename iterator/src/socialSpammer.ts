import { Profile } from "./profile";
import { ProfileIterator } from "./iterators/profileIterator";
import { System } from "./system";

class SocialSpammer {
  public send(iterator: ProfileIterator, message: string): void {
    while (iterator.hasMore()) {
      const profile: Profile = iterator.getNext();
      System.sendEmail(profile.getEmail(), message);
    }
  }
}

export { SocialSpammer };
