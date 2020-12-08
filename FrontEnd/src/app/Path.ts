export interface Path {
    pathId: number;
    isEmpty: boolean;
    distance: number;
    duration: number,
    segments: Array<{
        initialNode: string,
        finalNode: string,
        duration: number,
        distance: number
    }>;
}