import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { Sneakers } from "../domain/Sneakers";
import { ISneakersDTO } from "../dto/ISneakersDTO";

export class SneakersMap extends Mapper<Sneakers> {

    public static toDTO(sneakers: Sneakers): ISneakersDTO {
        return {
            code: sneakers.code,
            name: sneakers.name,
            size: sneakers.size,
            condition: sneakers.condition,
        } as ISneakersDTO;
    }

    public static async toDomain(raw: any): Promise<Sneakers> {
        const sneakersOrError = Sneakers.create({
            code: raw.code,
            name: raw.name,
            size: raw.size,
            condition: raw.condition,
        }, new UniqueEntityID(raw.code))

        sneakersOrError.isFailure ? console.log(sneakersOrError.error) : '';

        return sneakersOrError.isSuccess ? sneakersOrError.getValue() : null;
    }

    public static toPersistence(sneakers: Sneakers): any {
        const p = {
            code: sneakers.code,
            name: sneakers.name,
            size: sneakers.size,
            condition: sneakers.condition,
        }
        return p;
    }

}