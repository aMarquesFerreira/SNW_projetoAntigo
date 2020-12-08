import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { Path } from "../domain/Sneakers";
import { IPathDTO } from "../dto/ISneakersDTO";

export class PathMap extends Mapper<Path> {

    public static toDTO(path: Path): IPathDTO {
        return {
            pathId: path.pathId,
            isEmpty: path.isEmpty,
            distance: path.distance,
            duration: path.duration,
            segments: path.segments,
        } as IPathDTO;
    }

    public static async toDomain(raw: any): Promise<Path> {
        const pathOrError = Path.create({
            pathId: raw.pathId,
            isEmpty: raw.isEmpty,
            distance: raw.distance,
            duration: raw.duration,
            segments: raw.segments,
        }, new UniqueEntityID(raw.pathId))

        pathOrError.isFailure ? console.log(pathOrError.error) : '';

        return pathOrError.isSuccess ? pathOrError.getValue() : null;
    }

    public static toPersistence(path: Path): any {
        const p = {
            pathId: path.pathId,
            isEmpty: path.isEmpty,
            distance: path.distance,
            duration: path.duration,
            segments: path.segments,
        }
        return p;
    }

}