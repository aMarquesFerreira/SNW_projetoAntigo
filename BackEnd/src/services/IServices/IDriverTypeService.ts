import { Result } from "../../core/logic/Result";
import { IDriverTypeDTO } from "../../dto/IDriverTypeDTO";

export default interface IDriverTypeService {
    createDriverType(driverTypeDTO: IDriverTypeDTO): Promise<Result<IDriverTypeDTO>>;
    updateDriverType(driverTypeDTO: IDriverTypeDTO): Promise<Result<IDriverTypeDTO>>;
    getAllDriverTypes(): Promise<Result<IDriverTypeDTO[]>>;
    getDriverTypeByCode(code: string): Promise<Result<IDriverTypeDTO>>;
}