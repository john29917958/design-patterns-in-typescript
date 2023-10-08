import { Visitor } from "../visitors/visitor";
import { Shape } from "./shape";

class Dot implements Shape {
  public move(x: number, y: number): void {
    console.log("Move dot: (" + x + ", " + y + ").");
  }

  public draw(): void {
    console.log("Draw dot.");
  }

  public accept(v: Visitor): void {
    v.visitDot(this);
  }
}

export { Dot };
