import { ValueObject } from "../core/domain/ValueObject";

interface GPSCoordinatesProps {
    latitude: number;
    longitude: number;
}

export class GPSCoordinates extends ValueObject<GPSCoordinatesProps> {
    get latitude(): number {
        return this.props.latitude;
    }

    get longitude(): number {
        return this.props.longitude;
    }

    private constructor(props: GPSCoordinatesProps) {
        super(props);
    }

    public static create(lat: number, long: number): GPSCoordinates {
        return new GPSCoordinates({ latitude: lat, longitude: long });
    }
}