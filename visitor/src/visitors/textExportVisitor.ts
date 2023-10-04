import { Circle } from "../shapes/circle";
import { CompoundShape } from "../shapes/compoundShape";
import { Dot } from "../shapes/dot";
import { Rectangle } from "../shapes/rectangle";
import { Visitor } from "./visitor";

class TextExportVisitor implements Visitor {
  public visitDot(d: Dot): void {
    console.log("Export information of dot in text format.");
  }
  public visitCircle(c: Circle): void {
    console.log("Export information of circle in text format.");
  }
  public visitRectangle(r: Rectangle): void {
    console.log("Export information of rectangle in text format.");
  }
  public visitCompoundShape(cs: CompoundShape): void {
    console.log("Export information of compound shape in text format.");
  }
}

export { TextExportVisitor };
