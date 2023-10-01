import { Profile } from "../profile";

interface ProfileIterator {
  getNext(): Profile;

  hasMore(): boolean;
}

export { ProfileIterator };
