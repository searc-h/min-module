import { SubscriptionEvent } from "../interface";

export class Subscription<T extends Record<string, unknown>> {
  private state: T;
  private events: SubscriptionEvent<T>[] = [];

  constructor(state: T) {
    this.state = state;
  }

  private initEvents = (value: T) => {
    this.events.forEach(event => event(value));
  };

  public setState = (value: T) => {
    const newState = { ...this.state, ...value };
    this.initEvents(newState);
  };

  public getState = () => this.state;

  public listen = (handler: (value: T) => void) => {
    this.events.push(handler);
  };

  public unlisten = (handler: (value: T) => void) => {
    if (!this.events.some(event => event === handler)) return;
    this.events = this.events.filter(event => event !== handler);
  };
}
