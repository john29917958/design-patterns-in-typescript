import { EventListener } from "./eventListeners/eventListener";

class EventManager {
  private listeners: [string, EventListener][];

  public constructor() {
    this.listeners = [];
  }

  subscribe(eventType: string, listener: EventListener): void {
    this.listeners.push([eventType, listener]);
  }

  unsubscribe(eventType: string, listener: EventListener): void {
    const subscriptionIndex = this.listeners.findIndex(
      (subscription) =>
        subscription[0] === eventType && subscription[1] === listener
    );
    if (subscriptionIndex > -1) {
      this.listeners.splice(subscriptionIndex, 1);
    }
  }

  notify(eventType: string, data: string): void {
    for (const subscription of this.listeners) {
      if (subscription[0] === eventType) {
        subscription[1].update(data);
      }
    }
  }
}

export { EventManager };
