import { Segment } from "../domain/Segment";

export interface IPathPersistence {
    pathId: number;
    isEmpty: boolean;
    distance: number;
    duration: number;
    segments: Segment[];
}