import { Context } from "../context";
import { Expression } from "./expression";

class NumberExpression implements Expression {
  public constructor(private number: number) {
    this.number = number;
  }

  public interpret(context: Context): number {
    return this.number;
  }
}

export { NumberExpression };
