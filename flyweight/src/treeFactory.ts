import { TreeType } from "./treeType";

class TreeFactory {
  private static treeTypes: TreeType[] = [];

  public static getTreeType(
    name: string,
    color: string,
    texture: string
  ): TreeType {
    let treeType: TreeType | undefined = this.treeTypes.find(
      (treeType) =>
        treeType.name === name &&
        treeType.color === color &&
        treeType.texture === texture
    );
    if (treeType === undefined) {
      console.log(
        "Can't find the tree type \"" +
          color +
          " " +
          name +
          '" with ' +
          texture +
          " texture, create it with heavy system resource."
      );
      treeType = new TreeType(name, color, texture);
      this.treeTypes.push(treeType);
      return treeType;
    } else {
      return treeType;
    }
  }
}

export { TreeFactory };
