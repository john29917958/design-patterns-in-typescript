import { Visitor } from "../visitors/visitor";
import { Shape } from "./shape";

class Circle implements Shape {
  public move(x: number, y: number): void {
    console.log("Move circle: (" + x + ", " + y + ").");
  }

  public draw(): void {
    console.log("Draw circle.");
  }

  public accept(v: Visitor): void {
    v.visitCircle(this);
  }
}

export { Circle };
