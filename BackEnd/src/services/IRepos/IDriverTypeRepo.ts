import { Repo } from "../../core/infra/Repo";
import { DriverType } from "../../domain/DriverType";

export default interface IDriverTypeRepo extends Repo<DriverType> {
    save(node: DriverType): Promise<DriverType>;
    findAll(): Promise<DriverType[]>;
    findByCode(code: string): Promise<DriverType>;
}