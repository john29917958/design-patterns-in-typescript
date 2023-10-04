import { Strategy } from "./strategy";

class ConcreteStrategy2 implements Strategy {
  public execute(data: string): void {
    console.log("Run a complext algorithm with input: " + data + ".");
  }

  public execute2(): void {
    console.log("Run a complex algorithm 2 without input.");
  }

  public execute3(data: number): void {
    console.log("Run a complex algorithm 3 with input: " + data + ".");
  }
}

export { ConcreteStrategy2 };
