import { Service, Inject } from 'typedi';

import { Document, Model } from 'mongoose';
import { ITravelLinePersistence } from '../dataschema/ITravelLinePersistence';
import { TravelLine } from "../domain/TravelLine";
import ITravelLineRepo from "../services/IRepos/ITravelLineRepo";
import { TravelLineMap } from "../mappers/TravelLineMap";

@Service()
export default class TravelLineRepo implements ITravelLineRepo {
    private models: any;

    constructor(
        @Inject('TravelLineSchema') private TravelLineSchema: Model<ITravelLinePersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async exists(travelLine : TravelLine): Promise<boolean> {
        const query = { lineID: travelLine.id };

        const TravelLineDocument = await this.TravelLineSchema.find(query);

        return !! TravelLineDocument === true;
    }

    public async save(travelLine: TravelLine): Promise<TravelLine> {
        const query = { code: travelLine.code };

        const travelLineDocument = await this.TravelLineSchema.findOne(query);

        try {
            if (travelLineDocument === null) {
                const rawTravelLine: any = TravelLineMap.toPersistence(travelLine);

                const travelLineCreated = await this.TravelLineSchema.create(rawTravelLine);

                return TravelLineMap.toDomain(travelLineCreated);
            } else {
                travelLineDocument.name = travelLine.name;
                travelLineDocument.code = travelLine.code;
                travelLineDocument.terminalNode1 = travelLine.terminalNode1;
                travelLineDocument.terminalNode2 = travelLine.terminalNode2;
                travelLineDocument.linePaths = travelLine.linePaths;
                await travelLineDocument.save();

                return travelLine;
            }
        } catch (err) {
            throw err;
        }
    }

    public async findAll(): Promise<TravelLine[]> {
        const lineDocumentList = await this.TravelLineSchema.find();

        var lineList: TravelLine[] = new Array;
        for (let i = 0; i < lineDocumentList.length; i++) {
            let line = await TravelLineMap.toDomain(lineDocumentList[i]);
            lineList.push(line);
        }
        
        return Promise.all(lineList);
    }

    public async findByCodeSearch(codeSearch: string): Promise<TravelLine[]> {

        const lineDocumentList = await this.TravelLineSchema.find({"code": {$regex: '^' + codeSearch, '$options': 'i'}}).sort("codeName");

        var lineList: TravelLine[] = new Array;
        for (let i = 0; i < lineDocumentList.length; i++) {
            let line = await TravelLineMap.toDomain(lineDocumentList[i]);
            lineList.push(line);
        }
        
        return Promise.all(lineList);
    }
}