// import { Service, Inject } from 'typedi';

// import { Document, Model } from 'mongoose';
// import { INodePersistence } from '../dataschema/INodePersistence';

// import INodeRepo from "../services/IRepos/INodeRepo";
// import { Node } from "../domain/Node";
// import { NodeId } from "../domain/NodeId";
// import { NodeMap } from "../mappers/NodeMap";

// @Service()
// export default class NodeRepo implements INodeRepo {
//     private models: any;

//     constructor(
//         @Inject('NodeSchema') private NodeSchema: Model<INodePersistence & Document>,
//     ) { }

//     public async exists(nodeId: NodeId | string): Promise<boolean> {

//         const idX = nodeId instanceof NodeId ? (<NodeId>nodeId).id.toValue() : nodeId;

//         const query = { domainId: idX };
//         const nodeDocument = await this.NodeSchema.findOne(query);

//         return !!nodeDocument === true;
//     }

//     public async save(node: Node): Promise<Node> {
//         const query = { shortName: node.shortName };

//         const nodeDocument = await this.NodeSchema.findOne(query);

//         try {
//             if (nodeDocument === null) {
//                 const rawNode: any = NodeMap.toPersistence(node);

//                 const nodeCreated = await this.NodeSchema.create(rawNode);

//                 return NodeMap.toDomain(nodeCreated);
//             } else {
//                 nodeDocument.shortName = node.shortName;
//                 nodeDocument.fullName = node.fullName;
//                 nodeDocument.latitude = node.coordinates.latitude;
//                 nodeDocument.longitude = node.coordinates.longitude;
//                 nodeDocument.isDepot = node.isDepot;
//                 nodeDocument.isReliefPoint = node.isReliefPoint;
//                 if (node.crewTravelTime != undefined) {
//                     nodeDocument.duration = node.crewTravelTime.duration;
//                 } else {
//                     nodeDocument.duration = undefined;
//                 }
//                 await nodeDocument.save();

//                 return node;
//             }
//         } catch (err) {
//             throw err;
//         }
//     }

//     public async findAll(): Promise<Node[]> {
//         const nodeDocumentList = await this.NodeSchema.find();

//         var nodeList: Node[] = new Array;
//         for (let i = 0; i < nodeDocumentList.length; i++) {
//             let node = await NodeMap.toDomain(nodeDocumentList[i]);
//             nodeList.push(node);
//         }

//         return Promise.all(nodeList);
//     }

//     public async findByShortName(shortName: string): Promise<Node> {
//         const query = { shortName: shortName };

//         const nodeDocument = await this.NodeSchema.findOne(query);

//         const node = NodeMap.toDomain(nodeDocument);
//         return node;

//     }

//     public async findByShortNameSearch(shortNameSearch: string): Promise<Node[]> {

//         const nodeDocumentList = await this.NodeSchema.find({ "shortName": { $regex: '^' + shortNameSearch, '$options': 'i' } }).sort("shortName");

//         var nodeList: Node[] = new Array;
//         for (let i = 0; i < nodeDocumentList.length; i++) {
//             let node = await NodeMap.toDomain(nodeDocumentList[i]);
//             nodeList.push(node);
//         }

//         return Promise.all(nodeList);
//     }

//     public async findAllOrderByShortName(): Promise<Node[]> {
//         const nodeDocumentList = await this.NodeSchema.find().sort("shortName");

//         var nodeList: Node[] = new Array;
//         for (let i = 0; i < nodeDocumentList.length; i++) {
//             let node = await NodeMap.toDomain(nodeDocumentList[i]);
//             nodeList.push(node);
//         }

//         return Promise.all(nodeList);
//     }
// }