import { Circle } from "../shapes/circle";
import { CompoundShape } from "../shapes/compoundShape";
import { Dot } from "../shapes/dot";
import { Rectangle } from "../shapes/rectangle";
import { Visitor } from "./visitor";

class XMLExportVisitor implements Visitor {
  public visitDot(d: Dot): void {
    console.log("Export information of dot in XML format.");
  }

  public visitCircle(c: Circle): void {
    console.log("Export information of circle in XML format.");
  }

  public visitRectangle(r: Rectangle): void {
    console.log("Export information of rectangle in XML format.");
  }

  public visitCompoundShape(cs: CompoundShape): void {
    console.log("Export information of compound shape in XML format.");
  }
}

export { XMLExportVisitor };
