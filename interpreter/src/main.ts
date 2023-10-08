import { Context } from "./context";
import { AddExpression } from "./expressions/addExpression";
import { Expression } from "./expressions/expression";
import { NumberExpression } from "./expressions/numberExpression";

// Expression: 1 + 2
let expression: Expression = new AddExpression(
  new NumberExpression(1),
  new NumberExpression(2)
);
let context: Context = new Context();
let result: number = expression.interpret(context);
console.log('The result of expression "1+2" is: ' + result);
