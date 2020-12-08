import { HighlightSpanKind } from "typescript";
import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import { Guard } from "../core/logic/Guard";
import { EnergySource } from "./EnergySource";

interface VehicleTypeProps {
    vehicleId: string;
    name: string;
    autonomy: number;
    cost: number;
    averageSpeed: number;
    energySource: EnergySource;
    consumption: number;
    emissions: number;
}

export class VehicleType extends AggregateRoot<VehicleTypeProps> {
    get id (): UniqueEntityID {
        return this._id;
    }

    get vehicleId(): string {
        return this.props.vehicleId;
    }

    get name (): string {
        return this.props.name;
    }

    get autonomy (): number {
        return this.props.autonomy;
    }

    get cost (): number {
        return this.props.cost;
    }

    get averageSpeed (): number {
        return this.props.averageSpeed;
    }

    get energySource (): EnergySource {
        return this.props.energySource;
    }

    get consumption (): number {
        return this.props.consumption;
    }

    get emissions (): number {
        return this.props.emissions;
    }

    set vehicleId (value: string) {
        this.props.vehicleId = value;
    }

    set name (value: string) {
        this.props.name = value;
    }

    set autonomy (value: number) {
        this.props.autonomy = value;
    }

    set cost (value: number) {
        this.props.cost = value;
    }

    set averageSpeed (value: number) {
        this.props.averageSpeed = value;
    }

    set energySource (value: EnergySource) {
        this.props.energySource = value;
    }

    set consumption (value: number) {
        this.props.consumption = value;
    }

    set emissions (value: number) {
        this.props.emissions = value;
    }

    private constructor (props: VehicleTypeProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: VehicleTypeProps, id?: UniqueEntityID): Result<VehicleType> {
        
        const guardedProps = [
            { argument: props.vehicleId, argumentName: 'vehicleId' },
            { argument: props.name, argumentName: 'name' },
            { argument: props.autonomy, argumentName: 'autonomy' },
            { argument: props.cost, argumentName: 'cost' },
            { argument: props.averageSpeed, argumentName: 'averageSpeed' },
            { argument: props.energySource, argumentName: 'energySource' },
            { argument: props.consumption, argumentName: 'consumption' },
            { argument: props.emissions, argumentName: 'emissions' },
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);
        
        if (!guardResult.succeeded) {
            return Result.fail<VehicleType>(guardResult.message)
        }else{
            const vehicleType = new VehicleType({
                ...props
            }, id);
            return Result.ok<VehicleType>(vehicleType);
        }
    }

}