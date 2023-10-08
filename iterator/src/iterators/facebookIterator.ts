import { Facebook } from "../socialNetworks/facebook";
import { Profile } from "../profile";
import { ProfileIterator } from "./profileIterator";

class FacebookIterator implements ProfileIterator {
  private cache: Profile[];
  private currentPosition: number;

  public constructor(
    private facebook: Facebook,
    private profileId: string,
    private type: string
  ) {
    this.facebook = facebook;
    this.profileId = profileId;
    this.type = type;
    this.cache = [];
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
    this.lazyInit();
    return this.currentPosition < this.cache.length;
  }

  private lazyInit(): void {
    if (this.cache.length === 0) {
      this.cache = this.facebook.socialGraphRequest(this.profileId, this.type);
    }
  }
}

export { FacebookIterator };
