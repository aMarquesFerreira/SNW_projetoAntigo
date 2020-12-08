import { Repo } from "../../core/infra/Repo";
import { User } from "../../domain/User";

export default interface IUserRepo extends Repo<User> {
    save(node: User): Promise<User>;
    findAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
}