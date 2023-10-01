import { Canvas } from "./canvas";

class TreeType {
  public get name() {
    return this._name;
  }

  public get color() {
    return this._color;
  }

  public get texture() {
    return this._texture;
  }

  public constructor(
    private _name: string,
    private _color: string,
    private _texture: string
  ) {
    this._name = _name;
    this._color = _color;
    this._texture = _texture;
  }

  public draw(canvas: Canvas, x: number, y: number): void {
    console.log("Draw tree on canvas at " + x + ", " + y + ".");
  }
}

export { TreeType };
