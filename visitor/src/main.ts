import { Circle } from "./shapes/circle";
import { CompoundShape } from "./shapes/compoundShape";
import { Dot } from "./shapes/dot";
import { Rectangle } from "./shapes/rectangle";
import { Shape } from "./shapes/shape";
import { JsonExportVisitor } from "./visitors/jsonExportVisitor";
import { TextExportVisitor } from "./visitors/textExportVisitor";
import { Visitor } from "./visitors/visitor";
import { XMLExportVisitor } from "./visitors/xmlExportVisitor";

const shapes: Shape[] = [
  new Dot(),
  new Circle(),
  new Rectangle(),
  new CompoundShape(),
];
let exportVisitor = new TextExportVisitor();
visitAllShapes(shapes, exportVisitor);
exportVisitor = new XMLExportVisitor();
visitAllShapes(shapes, exportVisitor);
exportVisitor = new JsonExportVisitor();
visitAllShapes(shapes, exportVisitor);

function visitAllShapes(shapes: Shape[], visitor: Visitor) {
  for (const shape of shapes) {
    shape.accept(exportVisitor);
  }
}
