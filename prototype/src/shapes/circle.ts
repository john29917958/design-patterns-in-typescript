import { Shape } from "./shape";

class Circle extends Shape {
  public radius: number;

  public constructor(circle?: Circle) {
    super(circle);
    if (circle !== undefined) {
      this.radius = circle?.radius;
    } else {
      this.radius = 0;
    }
  }

  public clone(): Shape {
    const circle: Circle = new Circle(this);
    return circle;
  }
}

export { Circle };
