import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { User } from "../domain/User";
import { IUserDTO } from "../dto/IUserDTO";

export class UserMap extends Mapper<User> {

    public static toDTO(user: User): IUserDTO {
        return {
            name: user.name,
            email: user.email,
            age: user.age,
            size: user.size,
            address: user.address,
            postalCode: user.postalCode,
            password: user.password
        } as IUserDTO;
    }

    public static async toDomain(raw: any): Promise<User> {
        const userOrError = User.create({
            name: raw.name,
            email: raw.email,
            age: raw.age,
            size: raw.size,
            address: raw.address,
            postalCode: raw.postalCode,
            password: raw.password
        }, new UniqueEntityID(raw.code))

        userOrError.isFailure ? console.log(userOrError.error) : '';

        return userOrError.isSuccess ? userOrError.getValue() : null;
    }

    public static toPersistence(user: User): any {
        const d = {
            name: user.name,
            email: user.email,
            age: user.age,
            size: user.size,
            address: user.address,
            postalCode: user.postalCode,
            password: user.password
        }
        return d;
    }
}