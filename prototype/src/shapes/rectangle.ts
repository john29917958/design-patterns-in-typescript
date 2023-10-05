import { Shape } from "./shape";

class Rectangle extends Shape {
  public width: number;

  public height: number;

  public constructor(rectangle?: Rectangle) {
    super(rectangle);

    if (rectangle !== undefined) {
      this.width = rectangle.width;
      this.height = rectangle.height;
    } else {
      this.width = 0;
      this.height = 0;
    }
  }

  public clone(): Shape {
    const rectangle: Rectangle = new Rectangle(this);
    return rectangle;
  }
}

export { Rectangle };
