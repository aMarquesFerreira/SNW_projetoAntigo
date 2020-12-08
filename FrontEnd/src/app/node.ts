export interface Node {
    shortName: string;
    fullName: string;
    coordinates: {
        props: {
            latitude: number;
            longitude: number;
        }
    };
    isDepot: boolean;
    isReliefPoint: boolean;
    crewTravelTime: {
        props: {
            duration: number;
        }
    };
}