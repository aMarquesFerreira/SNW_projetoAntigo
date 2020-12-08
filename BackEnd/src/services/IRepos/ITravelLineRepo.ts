import { Repo } from "../../core/infra/Repo";
import { TravelLine } from "../../domain/TravelLine";

export default interface ITravelLineRepo extends Repo<TravelLine> {
  save(node: TravelLine): Promise<TravelLine>;
  findAll(): Promise<TravelLine[]>;
  findByCodeSearch(code: string): Promise<TravelLine[]>;
}