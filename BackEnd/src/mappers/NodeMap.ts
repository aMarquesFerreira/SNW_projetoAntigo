// import { Mapper } from "../core/infra/Mapper";

// import { INodeDTO } from "../dto/INodeDTO";

// import { Node } from "../domain/Node";
// import { GPSCoordinates } from "../domain/GPSCoordinates"
// import { UniqueEntityID } from "../core/domain/UniqueEntityID";
// import { CrewTravelTime } from "../domain/CrewTravelTime";


// export class NodeMap extends Mapper<Node> {

//   public static toDTO(node: Node): INodeDTO {
//     return {
//       shortName: node.shortName,
//       fullName: node.fullName,
//       coordinates: node.coordinates,
//       isDepot: node.isDepot,
//       isReliefPoint: node.isReliefPoint,
//       crewTravelTime: node.crewTravelTime,
//     } as INodeDTO;
//   }

//   public static async toDomain(raw: any): Promise<Node> {
//     const nodeOrError = Node.create({
//       fullName: raw.fullName,
//       coordinates: GPSCoordinates.create(raw.latitude, raw.longitude),
//       shortName: raw.shortName,
//       isDepot: raw.isDepot,
//       isReliefPoint: raw.isReliefPoint,
//       crewTravelTime: CrewTravelTime.create(raw.duration),
//     }, new UniqueEntityID(raw.shortName))

//     nodeOrError.isFailure ? console.log(nodeOrError.error) : '';

//     return nodeOrError.isSuccess ? nodeOrError.getValue() : null;
//   }

//   public static toPersistence(node: Node): any {
//     if (node.crewTravelTime != undefined) {
//       const a = {
//         base_node_id: node.id.toString(),
//         fullName: node.fullName,
//         latitude: node.coordinates.latitude,
//         longitude: node.coordinates.longitude,
//         shortName: node.shortName,
//         isDepot: node.isDepot,
//         isReliefPoint: node.isReliefPoint,
//         duration: node.crewTravelTime.duration,
//       }
//     }
//     const a = {
//       base_node_id: node.id.toString(),
//       fullName: node.fullName,
//       latitude: node.coordinates.latitude,
//       longitude: node.coordinates.longitude,
//       shortName: node.shortName,
//       isDepot: node.isDepot,
//       isReliefPoint: node.isReliefPoint,
//     }
//     return a;
//   }
// }