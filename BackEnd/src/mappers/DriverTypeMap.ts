import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { DriverType } from "../domain/DriverType";
import { IDriverTypeDTO } from "../dto/IDriverTypeDTO";

export class DriverTypeMap extends Mapper<DriverType> {

    public static toDTO(driverType: DriverType): IDriverTypeDTO {
        return {
            name: driverType.name,
            code: driverType.code,
            description: driverType.description,
        } as IDriverTypeDTO;
    }

    public static async toDomain(raw: any): Promise<DriverType> {
        const driverTypeOrError = DriverType.create({
            name: raw.name,
            code: raw.code,
            description: raw.description,
        }, new UniqueEntityID(raw.code))

        driverTypeOrError.isFailure ? console.log(driverTypeOrError.error) : '';

        return driverTypeOrError.isSuccess ? driverTypeOrError.getValue() : null;
    }

    public static toPersistence(driverType: DriverType): any {
        const d = {
            name: driverType.name.name,
            code: driverType.code.code,
            description: driverType.description.description,
        }
        return d;
    }
}