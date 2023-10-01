import { Canvas } from "./canvas";
import { Forest } from "./forest";

const canvas: Canvas = new Canvas();
const forest: Forest = new Forest();
forest.draw(canvas);
forest.plantTree(0, 0, "Maple", "green", "default");
forest.draw(canvas);
forest.plantTree(100, 0, "Maple", "green", "default");
forest.draw(canvas);
forest.plantTree(100, 100, "Acer rubrum", "red", "default");
forest.draw(canvas);
