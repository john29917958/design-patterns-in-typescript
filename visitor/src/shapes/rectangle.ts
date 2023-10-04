import { Visitor } from "../visitors/visitor";
import { Shape } from "./shape";

class Rectangle implements Shape {
  public move(x: number, y: number): void {
    console.log("Move rectangle: (" + x + ", " + y + ").");
  }

  public draw(): void {
    console.log("Draw rectangle.");
  }

  public accept(v: Visitor): void {
    v.visitRectangle(this);
  }
}

export { Rectangle };
