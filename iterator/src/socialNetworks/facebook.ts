import { FacebookIterator } from "../iterators/facebookIterator";
import { Profile } from "../profile";
import { ProfileIterator } from "../iterators/profileIterator";
import { SocialNetwork } from "./socialNetwork";

class Facebook implements SocialNetwork {
  public createFriendsIterator(profileId: string): ProfileIterator {
    return new FacebookIterator(this, profileId, "friends");
  }

  public createCoworkersIterator(profileId: string): ProfileIterator {
    return new FacebookIterator(this, profileId, "coworkers");
  }

  public socialGraphRequest(profileId: string, type: string): Profile[] {
    const profiles: Profile[] = [
      new Profile("1", "1@gmail.com"),
      new Profile("2", "2@gmail.com"),
      new Profile("3", "3@gmail.com"),
      new Profile("4", "4@gmail.com"),
      new Profile("5", "5@gmail.com"),
    ];
    const existingProfileId = profiles.findIndex(
      (profile) => profile.getId() === profileId
    );
    if (existingProfileId > -1) {
      profiles.splice(existingProfileId, 1);
    }
    return profiles;
  }
}

export { Facebook };
