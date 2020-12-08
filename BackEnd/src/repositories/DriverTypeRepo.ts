import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { IDriverTypePersistence } from "../dataschema/IDriverTypePersistence";
import { DriverType } from "../domain/DriverType";
import { DriverTypeMap } from "../mappers/DriverTypeMap";
import IDriverTypeRepo from "../services/IRepos/IDriverTypeRepo";

@Service()
export default class DriverTypeRepo implements IDriverTypeRepo {
    private models: any;

    constructor(
        @Inject('DriverTypeSchema') private DriverTypeSchema: Model<IDriverTypePersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async exists(driverType: DriverType): Promise<boolean> {
        const query = { code: driverType.code.code };

        const driverTypeDocument = await this.DriverTypeSchema.find(query);

        return !!driverTypeDocument === true;
    }

    public async save(driverType: DriverType): Promise<DriverType> {
        const query = { code: driverType.code.code };

        const driverTypeDocument = await this.DriverTypeSchema.findOne(query);

        try {
            if (driverTypeDocument === null) {
                const rawDriverType: any = DriverTypeMap.toPersistence(driverType);

                const driverTypeCreated = await this.DriverTypeSchema.create(rawDriverType);

                return DriverTypeMap.toDomain(driverTypeCreated);
            } else {
                driverTypeDocument.name = driverType.name.name;
                driverTypeDocument.code = driverType.code.code;
                driverTypeDocument.description = driverType.description.description;
                await driverTypeDocument.save();

                return driverType;
            }
        } catch (err) {
            throw err;
        }
    }

    public async findAll(): Promise<DriverType[]> {
        const driverTypeDocumentList = await this.DriverTypeSchema.find();

        var driverTypeList: DriverType[] = new Array;
        for (let i = 0; i < driverTypeDocumentList.length; i++) {
            let driverType = await DriverTypeMap.toDomain(driverTypeDocumentList[i]);
            driverTypeList.push(driverType);            
        }

        return Promise.all(driverTypeList);
    }

    public async findByCode(code: string): Promise<DriverType> {
        const query = { code: code };

        const driverTypeDocument = await this.DriverTypeSchema.findOne(query);

        const driverType = DriverTypeMap.toDomain(driverTypeDocument);

        return driverType;
    }
}