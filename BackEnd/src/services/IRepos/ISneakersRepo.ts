import { Repo } from "../../core/infra/Repo";
import { Sneakers } from "../../domain/Sneakers";

export default interface ISneakersRepo extends Repo<Sneakers> {
    save(sneaker: Sneakers): Promise<Sneakers>;
    findAll(): Promise<Sneakers[]>;
    findSneakersByCode(code: string): Promise<Sneakers>;
    findSneakersByCondition(condition: number): Promise<Sneakers>;
    findSneakersBySize(condition: number): Promise<Sneakers>;
}