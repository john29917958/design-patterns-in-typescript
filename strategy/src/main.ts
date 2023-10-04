import { ConcreteStrategy1 } from "./strategies/concreteStrategy1";
import { ConcreteStrategy2 } from "./strategies/concreteStrategy2";
import { Strategy } from "./strategies/strategy";

let strategy: Strategy = new ConcreteStrategy1();
strategy.execute("Hello, World!");
strategy.execute2();
strategy.execute3(1);
strategy = new ConcreteStrategy2();
strategy.execute("Hello, World!");
strategy.execute2();
strategy.execute3(1);
