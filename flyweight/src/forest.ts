import { Canvas } from "./canvas";
import { Tree } from "./tree";
import { TreeFactory } from "./treeFactory";
import { TreeType } from "./treeType";

class Forest {
  private trees: Tree[];

  public constructor() {
    this.trees = [];
  }

  public plantTree(
    x: number,
    y: number,
    name: string,
    color: string,
    texture: string
  ): Tree {
    const type: TreeType = TreeFactory.getTreeType(name, color, texture);
    const tree: Tree = new Tree(x, y, type);
    this.trees.push(tree);
    return tree;
  }

  public draw(canvas: Canvas): void {
    console.log("Draws the trees.");
    for (const tree of this.trees) {
      tree.draw(canvas);
    }
  }
}

export { Forest };
