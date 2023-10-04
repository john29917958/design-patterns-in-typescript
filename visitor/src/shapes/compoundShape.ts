import { Visitor } from "../visitors/visitor";
import { Shape } from "./shape";

class CompoundShape implements Shape {
  public move(x: number, y: number): void {
    console.log("Move compound shape: (" + x + ", " + y + ").");
  }

  public draw(): void {
    console.log("Draw compound shape.");
  }

  public accept(v: Visitor): void {
    v.visitCompoundShape(this);
  }
}

export { CompoundShape };
