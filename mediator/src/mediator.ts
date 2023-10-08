import { Component } from "./components/component";

interface Mediator {
  notify(sender: Component, event: string): void;
}

export { Mediator };
