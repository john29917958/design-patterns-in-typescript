import { Canvas } from "./canvas";
import { TreeType } from "./treeType";

class Tree {
  public constructor(
    public x: number,
    public y: number,
    public type: TreeType
  ) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  public draw(canvas: Canvas): void {
    console.log(
      "Draw " +
        this.type.color +
        " " +
        this.type.name +
        " tree with " +
        this.type.texture +
        " texture on canvas at " +
        this.x +
        ", " +
        this.y +
        "."
    );
  }
}

export { Tree };
