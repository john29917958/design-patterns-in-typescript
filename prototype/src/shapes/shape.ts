abstract class Shape {
  public x: number;

  public y: number;

  public color: string | null;

  public constructor(source?: Shape) {
    if (source !== undefined) {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    } else {
      this.x = 0;
      this.y = 0;
      this.color = null;
    }
  }

  public abstract clone(): Shape;
}

export { Shape };
