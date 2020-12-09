// import { Service, Inject } from 'typedi';
// import config from "../../config";
// import { INodeDTO } from '../dto/INodeDTO';
// import { Node } from "../domain/Node";
// import INodeRepo from './IRepos/INodeRepo';
// import INodeService from './IServices/INodeService';
// import { Result } from "../core/logic/Result";
// import { NodeMap } from "../mappers/NodeMap";

// @Service()
// export default class NodeService implements INodeService {
//   constructor(
//     @Inject(config.repos.node.name) private nodeRepo: INodeRepo
//   ) { }

//   public async createNode(nodeDTO: INodeDTO): Promise<Result<INodeDTO>> {
//     try {

//       const nodeOrError = Node.create(nodeDTO);

//       if (nodeOrError.isFailure) {
//         return Result.fail<INodeDTO>(nodeOrError.errorValue());
//       }

//       const nodeResult = nodeOrError.getValue();

//       await this.nodeRepo.save(nodeResult);

//       const nodeDTOResult = NodeMap.toDTO(nodeResult) as INodeDTO;
//       return Result.ok<INodeDTO>(nodeDTOResult)
//     } catch (e) {
//       throw e;
//     }
//   }

//   public async getAllNodes(): Promise<Result<INodeDTO[]>> {
//     try {
//       const nodeList = this.nodeRepo.findAll();

//       let nodeDTOList: INodeDTO[] = new Array;

//       (await nodeList).forEach(function (value) {
//         nodeDTOList.push(NodeMap.toDTO(value) as INodeDTO);
//       });

//       return Result.ok<INodeDTO[]>(nodeDTOList)

//     } catch (e) {
//       throw e;
//     }
//   }

//   public async getNodeByShortName(shortName: string): Promise<Result<INodeDTO>> {
//     try {
//       const node = await this.nodeRepo.findByShortName(shortName);

//       const nodeDTOResult = NodeMap.toDTO(node) as INodeDTO;

//       return Result.ok<INodeDTO>(nodeDTOResult)

//     } catch (e) {
//       throw e;
//     }
//   }

//   public async getNodesByShortNameSearch(shortNameSearch: string): Promise<Result<INodeDTO[]>> {
//     try {
//       const nodeList = this.nodeRepo.findByShortNameSearch(shortNameSearch);

//       let nodeDTOList: INodeDTO[] = new Array;

//       (await nodeList).forEach(function (value) {
//         nodeDTOList.push(NodeMap.toDTO(value) as INodeDTO);
//       });

//       return Result.ok<INodeDTO[]>(nodeDTOList)

//     } catch (e) {
//       throw e;
//     }
//   }

//   public async getAllNodesOrderByShortName(): Promise<Result<INodeDTO[]>> {
//     try {
//       const nodeList = this.nodeRepo.findAllOrderByShortName();

//       let nodeDTOList: INodeDTO[] = new Array;

//       (await nodeList).forEach(function (value) {
//         nodeDTOList.push(NodeMap.toDTO(value) as INodeDTO);
//       });

//       return Result.ok<INodeDTO[]>(nodeDTOList)

//     } catch (e) {
//       throw e;
//     }
//   }
// }
