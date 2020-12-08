export interface TravelLine {
    code: string;
    name: {
        props: {
           name: string; 
        }
    }
    color: string;
    terminalNode1: string;
    terminalNode2: string;
    linePaths: Array<{
        pathId: string;
        orientation: string;
    }>;
}