import { Profile } from "../profile";
import { LinkedIn } from "../socialNetworks/linkedIn";
import { ProfileIterator } from "./profileIterator";

class LinkedInIterator implements ProfileIterator {
  private cache: Profile[];
  private currentPosition: number;

  public constructor(
    private linkedIn: LinkedIn,
    private profileId: string,
    private type: string
  ) {
    this.linkedIn = linkedIn;
    this.profileId = profileId;
    this.type = type;
    this.cache = linkedIn.socialGraphRequest(profileId, type); // Initialize with very poor performance.
    this.currentPosition = 0;
  }

  public getNext(): Profile {
    if (this.hasMore()) {
      const result: Profile = this.cache[this.currentPosition];
      this.currentPosition++;
      return result;
    } else {
      throw new Error("No more profiles.");
    }
  }

  public hasMore(): boolean {
    return this.currentPosition < this.cache.length;
  }
}

export { LinkedInIterator };
