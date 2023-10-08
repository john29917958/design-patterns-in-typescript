import { Strategy } from "./strategy";

class ConcreteStrategy1 implements Strategy {
  public execute(data: string): void {
    console.log("Run algorithm with input: " + data + ".");
  }

  public execute2(): void {
    console.log("Run algorithm 2 without input.");
  }

  public execute3(data: number): void {
    console.log("Run algorithm 3 with input: " + data + ".");
  }
}

export { ConcreteStrategy1 };
