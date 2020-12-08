import { CrewTravelTime } from "../domain/CrewTravelTime";
import { GPSCoordinates } from "../domain/GPSCoordinates";

export interface INodeDTO {
  fullName: string;
  coordinates: GPSCoordinates;
  shortName: string;
  isDepot: boolean;
  isReliefPoint: boolean;
  crewTravelTime: CrewTravelTime;
}