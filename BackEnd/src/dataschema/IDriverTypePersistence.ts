import { Description } from "../domain/Description";
import { Code } from "../domain/Code";
import { Name } from "../domain/Name";

export interface IDriverTypePersistence {
    name: string,
    code: string,
    description: string,
}