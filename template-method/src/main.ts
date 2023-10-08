import { CSVDataMiner } from "./dataMiners/csvDataMiner";
import { DataMiner } from "./dataMiners/dataMiner";
import { DocDataMiner } from "./dataMiners/docDataMiner";
import { PDFDataMiner } from "./dataMiners/pdfDataMiner";

let dataMiner: DataMiner = new DocDataMiner();
dataMiner.mine("File 1.");
dataMiner = new CSVDataMiner();
dataMiner.mine("File 2.");
dataMiner = new PDFDataMiner();
dataMiner.mine("File 3.");
