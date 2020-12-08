import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { ISneakersPersistence } from "../dataschema/ISneakersPersistence";
import { Sneakers } from "../domain/Sneakers";
import { SneakersMap } from "../mappers/SneakersMap";
import ISneakersRepo from "../services/IRepos/ISneakersRepo";

@Service()
export default class SneakersRepo implements ISneakersRepo {
    private models: any;

    constructor(
        @Inject('SneakersSchema') private SneakersSchema: Model<ISneakersPersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(sneakers: Sneakers): Promise<Sneakers> {
        const query = { code: sneakers.code };

        const sneakersDocument = await this.SneakersSchema.findOne(query);

        try {
            if (sneakersDocument === null) {
                const rawSneakers: any = SneakersMap.toPersistence(sneakers);
                const sneakersCreated = await this.SneakersSchema.create(rawSneakers);
                
                return SneakersMap.toDomain(sneakersCreated);
            }else{
                sneakersDocument.code = sneakers.code;
                sneakersDocument.name = sneakers.name;
                sneakersDocument.size = sneakers.size;
                sneakersDocument.condition = sneakers.condition;                
                await sneakersDocument.save();
                return sneakers;
            }
        }catch (e) {
            throw e;
        }
    }

    public async exists(sneakers: Sneakers): Promise<boolean> {
        const query = { code : sneakers.code };
        const sneakersDocument = await this.SneakersSchema.findOne(query);

        return !!sneakersDocument === true;
    }

    public async findAll(): Promise<Sneakers[]> {
        const sneakersDocumentList = await this.SneakersSchema.find();

        var sneakersList: Sneakers[] = new Array;
        for (let i = 0; i < sneakersDocumentList.length; i++) {
            let sneakers = await SneakersMap.toDomain(sneakersDocumentList[i]);
            sneakersList.push(sneakers);
        }
        
        return Promise.all(sneakersList);
    }

    public async findSneakersByCode(code: string): Promise<Sneakers> {
        const query = { code: code };

        const sneakersDocument = await this.SneakersSchema.findOne(query);

        const sneakers = SneakersMap.toDomain(sneakersDocument);
        return sneakers;

    }

    
    public async findSneakersByCondition(condition: number): Promise<Sneakers> {
        const query = { condition: condition };

        const sneakersDocument = await this.SneakersSchema.findOne(query);

        const sneakers = SneakersMap.toDomain(sneakersDocument);
        return sneakers;

    }

    public async findSneakersBySize(size: number): Promise<Sneakers> {
        const query = { size: size };

        const sneakersDocument = await this.SneakersSchema.findOne(query);

        const sneakers = SneakersMap.toDomain(sneakersDocument);
        return sneakers;

    }
}