import { Context } from "../context";

interface Expression {
  interpret(context: Context): number;
}

export { Expression };
