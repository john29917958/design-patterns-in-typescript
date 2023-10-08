import { Singleton } from "./singleton";

let singleton: Singleton = Singleton.getInstance();
singleton.showId();
singleton = Singleton.getInstance();
singleton.showId(); // Shows same id number.
