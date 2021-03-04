import { Repo } from "../../core/infra/Repo";
import { Personalized } from "../../domain/Personalized";

export default interface IPersonalizedRepo extends Repo<Personalized> {
    save(personalized: Personalized): Promise<Personalized>;
    findAll(): Promise<Personalized[]>;
    findPersonalizedByName(name: string): Promise<Personalized>;
    findPersonalizedByAuthor(author: string): Promise<Personalized>;    
    findPersonalizedBySize(size: Number): Promise<Personalized>;
}