import { Repo } from "../../core/infra/Repo";
import { Sneakers } from "../../domain/Sneakers";

export default interface ISneakersRepo extends Repo<Sneakers> {
    save(sneaker: Sneakers): Promise<Sneakers>;
    findAll(): Promise<Sneakers[]>;
    findSneakersByName(name: string): Promise<Sneakers>;
    findSneakersByCondition(condition: Number): Promise<Sneakers>;
    findSneakersBySize(size: Number): Promise<Sneakers>;
}