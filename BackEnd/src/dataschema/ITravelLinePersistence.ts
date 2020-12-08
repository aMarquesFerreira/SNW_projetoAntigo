import { Name } from "../domain/Name";
import { LinePath } from "../domain/LinePath";

export interface ITravelLinePersistence {
    code: string;
    name: Name;
    terminalNode1: string;
    terminalNode2: string;
    linePaths: LinePath[];
}