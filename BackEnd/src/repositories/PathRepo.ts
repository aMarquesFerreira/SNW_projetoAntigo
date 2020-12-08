import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { IPathPersistence } from "../dataschema/IPathPersistence";
import { Path } from "../domain/Sneakers";
import { PathMap } from "../mappers/PathMap";
import IPathRepo from "../services/IRepos/ISneakersRepo";

@Service()
export default class PathRepo implements IPathRepo {
    private models: any;

    constructor(
        @Inject('PathSchema') private PathSchema: Model<IPathPersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(path: Path): Promise<Path> {
        const query = { pathId: path.pathId };

        const pathDocument = await this.PathSchema.findOne(query);

        try {
            if (pathDocument === null) {
                const rawPath: any = PathMap.toPersistence(path);
                const pathCreated = await this.PathSchema.create(rawPath);
                
                return PathMap.toDomain(pathCreated);
            }else{
                pathDocument.pathId = path.pathId;
                pathDocument.isEmpty = path.isEmpty;
                pathDocument.distance = path.distance;
                pathDocument.duration = path.duration;
                pathDocument.segments = path.segments;
                
                await pathDocument.save();
                return path;
            }
        }catch (e) {
            throw e;
        }
    }

    public async exists(path: Path): Promise<boolean> {
        const query = { pathId : path.pathId };
        const pathDocument = await this.PathSchema.findOne(query);

        return !!pathDocument === true;
    }

    public async findAll(): Promise<Path[]> {
        const pathDocumentList = await this.PathSchema.find();

        var pathList: Path[] = new Array;
        for (let i = 0; i < pathDocumentList.length; i++) {
            let path = await PathMap.toDomain(pathDocumentList[i]);
            pathList.push(path);
        }
        
        return Promise.all(pathList);
    }

    public async findByPathId(pathId: number): Promise<Path> {
        const query = { pathId: pathId };

        const pathDocument = await this.PathSchema.findOne(query);

        const path = PathMap.toDomain(pathDocument);
        return path;

    }
}