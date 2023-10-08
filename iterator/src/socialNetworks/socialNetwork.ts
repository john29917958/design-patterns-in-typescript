import { ProfileIterator } from "../iterators/profileIterator";

interface SocialNetwork {
  createFriendsIterator(profileId: string): ProfileIterator;

  createCoworkersIterator(profileId: string): ProfileIterator;
}

export { SocialNetwork };
