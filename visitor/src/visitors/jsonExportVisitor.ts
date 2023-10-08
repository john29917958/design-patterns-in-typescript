import { Circle } from "../shapes/circle";
import { CompoundShape } from "../shapes/compoundShape";
import { Dot } from "../shapes/dot";
import { Rectangle } from "../shapes/rectangle";
import { Visitor } from "./visitor";

class JsonExportVisitor implements Visitor {
  public visitDot(d: Dot): void {
    console.log("Export information of dot in JSON format.");
  }
  public visitCircle(c: Circle): void {
    console.log("Export information of circle in JSON format.");
  }
  public visitRectangle(r: Rectangle): void {
    console.log("Export information of rectangle in JSON format.");
  }
  public visitCompoundShape(cs: CompoundShape): void {
    console.log("Export information of compound shape in JSON format.");
  }
}

export { JsonExportVisitor };
