import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { IVehicleTypePersistence } from "../dataschema/IVehicleTypePersistence";
import { VehicleType } from "../domain/VehicleType";
import { VehicleTypeMap } from "../mappers/VehicleTypeMap";
import IVehicleTypeRepo from "../services/IRepos/IVehicleTypeRepo";

@Service()
export default class VehicleTypeRepo implements IVehicleTypeRepo {
    private models: any;

    constructor(
        @Inject('VehicleTypeSchema') private VehicleTypeSchema: Model<IVehicleTypePersistence & Document>,
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async exists(vehicleType: VehicleType): Promise<boolean> {
        const query = { vehicleId: vehicleType.vehicleId };

        const vehicleTypeDocument = await this.VehicleTypeSchema.find(query);

        return !!vehicleTypeDocument === true;
    }

    public async save(vehicleType: VehicleType): Promise<VehicleType> {
        const query = { vehicleId: vehicleType.vehicleId };

        const vehicleTypeDocument = await this.VehicleTypeSchema.findOne(query);

        try {
            if (vehicleTypeDocument === null) {
                const rawVehicleType: any = VehicleTypeMap.toPersistence(vehicleType);

                const vehicleTypeCreated = await this.VehicleTypeSchema.create(rawVehicleType);

                return VehicleTypeMap.toDomain(vehicleTypeCreated);
            } else {
                vehicleTypeDocument.vehicleId = vehicleType.vehicleId;
                vehicleTypeDocument.name = vehicleType.name;
                vehicleTypeDocument.autonomy = vehicleType.autonomy;
                vehicleTypeDocument.cost = vehicleType.cost;
                vehicleTypeDocument.averageSpeed = vehicleType.averageSpeed;
                vehicleTypeDocument.fuelType = vehicleType.energySource.fuelType;
                vehicleTypeDocument.description = vehicleType.energySource.description;
                vehicleTypeDocument.consumption = vehicleType.consumption;
                vehicleTypeDocument.emissions = vehicleType.emissions;
                await vehicleTypeDocument.save();

                return vehicleType;
            }
        } catch (err) {
            throw err;
        }
    }

    public async findAll(): Promise<VehicleType[]> {
        const vehicleTypeDocumentList = await this.VehicleTypeSchema.find();

        var vehicleTypeList: VehicleType[] = new Array;
        for (let i = 0; i < vehicleTypeDocumentList.length; i++) {
            let vehicleType = await VehicleTypeMap.toDomain(vehicleTypeDocumentList[i]);
            vehicleTypeList.push(vehicleType);
        }

        return Promise.all(vehicleTypeList);
    }

    public async findByVehicleId(vehicleId: string): Promise<VehicleType> {
        const query = { vehicleId: vehicleId };

        const vehicleTypeDocument = await this.VehicleTypeSchema.findOne(query);
        
        const vehicleType = VehicleTypeMap.toDomain(vehicleTypeDocument);
        return vehicleType;

    }
}