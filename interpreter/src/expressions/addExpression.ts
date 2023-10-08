import { Context } from "../context";
import { Expression } from "./expression";

class AddExpression implements Expression {
  public constructor(
    private leftExpr: Expression,
    private rightExpr: Expression
  ) {
    this.leftExpr = leftExpr;
    this.rightExpr = rightExpr;
  }

  public interpret(context: Context): number {
    return this.leftExpr.interpret(context) + this.rightExpr.interpret(context);
  }
}

export { AddExpression };
