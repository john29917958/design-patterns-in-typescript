import { Visitor } from "../visitors/visitor";

interface Shape {
  move(x: number, y: number): void;
  draw(): void;
  accept(v: Visitor): void;
}

export { Shape };
