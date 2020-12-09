// import { AggregateRoot } from "../core/domain/AggregateRoot";
// import { UniqueEntityID } from '../core/domain/UniqueEntityID';
// import { GPSCoordinates } from './GPSCoordinates';
// import { Result } from "../core/logic/Result";
// import { NodeId } from "./NodeId";
// import { Guard } from "../core/logic/Guard";
// import { CrewTravelTime } from "./CrewTravelTime";

// interface NodeProps {
//   fullName: string;
//   coordinates: GPSCoordinates;
//   shortName: string;
//   isDepot: boolean;
//   isReliefPoint: boolean;
//   crewTravelTime: CrewTravelTime;
// }

// export class Node extends AggregateRoot<NodeProps> {
//   get id(): UniqueEntityID {
//     return this._id;
//   }

//   get nodeId(): NodeId {
//     return NodeId.caller(this.id)
//   }

//   get shortName(): string {
//     return this.props.shortName;
//   }

//   get fullName(): string {
//     return this.props.fullName;
//   }

//   get coordinates(): GPSCoordinates {
//     return this.props.coordinates;
//   }

//   get isDepot(): boolean {
//     return this.props.isDepot;
//   }

//   get isReliefPoint(): boolean {
//     return this.props.isReliefPoint;
//   }

//   get crewTravelTime(): CrewTravelTime {
//     return this.props.crewTravelTime;
//   }

//   set shortName(value: string) {
//     this.props.shortName = value;
//   }

//   set fullName(value: string) {
//     this.props.fullName = value;
//   }

//   set coordinates(value: GPSCoordinates) {
//     this.props.coordinates = value;
//   }

//   set isDepot(value: boolean) {
//     this.props.isDepot = value;
//   }

//   set isReliefPoint(value: boolean) {
//     this.props.isReliefPoint = value;
//   }

//   set crewTravelTime(value: CrewTravelTime) {
//     this.props.crewTravelTime = value;
//   }

//   private constructor(props: NodeProps, id?: UniqueEntityID) {
//     super(props, id);
//   }

//   public static create(props: NodeProps, id?: UniqueEntityID): Result<Node> {

//     if (props.crewTravelTime != undefined) {
//       const guardedProps = [
//         { argument: props.shortName, argumentName: 'shortName' },
//         { argument: props.fullName, argumentName: 'fullName' },
//         { argument: props.coordinates, argumentName: 'coordinates' },
//         { argument: props.isDepot, argumentName: 'isDepot' },
//         { argument: props.isReliefPoint, argumentName: 'isReliefPoint' },
//         { argument: props.crewTravelTime, argumentName: 'crewTravelTime' },
//       ];
//     }
//     const guardedProps = [
//       { argument: props.shortName, argumentName: 'shortName' },
//       { argument: props.fullName, argumentName: 'fullName' },
//       { argument: props.coordinates, argumentName: 'coordinates' },
//       { argument: props.isDepot, argumentName: 'isDepot' },
//       { argument: props.isReliefPoint, argumentName: 'isReliefPoint' },
//     ];

//     const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

//     if (!guardResult.succeeded) {
//       return Result.fail<Node>(guardResult.message)
//     }
//     else {
//       const node = new Node({
//         ...props
//       }, id);

//       return Result.ok<Node>(node);
//     }
//   }
// }
