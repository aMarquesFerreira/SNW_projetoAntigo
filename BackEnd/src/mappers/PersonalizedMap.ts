import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { Personalized } from "../domain/Personalized";
import { IPersonalizedDTO } from "../dto/IPersonalizedDTO";

export class PersonalizedMap extends Mapper<Personalized> {

    public static toDTO(personalized: Personalized): IPersonalizedDTO {
        return {
            name: personalized.name,
            size: personalized.size,
            author: personalized.author,
        } as IPersonalizedDTO;
    }

    public static async toDomain(raw: any): Promise<Personalized> {
        const personalizedOrError = Personalized.create({
            name: raw.name,
            size: raw.size,
            author: raw.author,
        }, new UniqueEntityID(raw.code))

        personalizedOrError.isFailure ? console.log(personalizedOrError.error) : '';

        return personalizedOrError.isSuccess ? personalizedOrError.getValue() : null;
    }

    public static toPersistence(personalized: Personalized): any {
        const p = {
            name: personalized.name,
            size: personalized.size,
            author: personalized.author,
        }
        return p;
    }

}