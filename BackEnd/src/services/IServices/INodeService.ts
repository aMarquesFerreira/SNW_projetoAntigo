import { Result } from "../../core/logic/Result";
import { INodeDTO } from "../../dto/INodeDTO";

export default interface INodeService {
  createNode(nodeDTO: INodeDTO): Promise<Result<INodeDTO>>;
  getAllNodes(): Promise<Result<INodeDTO[]>>;
  getNodeByShortName(shortName: string): Promise<Result<INodeDTO>>;
  getNodesByShortNameSearch(shortNameSearch: string): Promise<Result<INodeDTO[]>>;
  getAllNodesOrderByShortName(): Promise<Result<INodeDTO[]>>;
}
