import { Description } from "../domain/Description";
import { Code } from "../domain/Code";
import { Name } from "../domain/Name";

export interface IDriverTypeDTO {
    name: Name;
    code: Code;
    description: Description;
}