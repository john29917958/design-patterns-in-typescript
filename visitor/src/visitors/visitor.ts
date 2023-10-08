import { Circle } from "../shapes/circle";
import { CompoundShape } from "../shapes/compoundShape";
import { Dot } from "../shapes/dot";
import { Rectangle } from "../shapes/rectangle";

interface Visitor {
  visitDot(d: Dot): void;

  visitCircle(c: Circle): void;

  visitRectangle(r: Rectangle): void;

  visitCompoundShape(cs: CompoundShape): void;
}

export { Visitor };
