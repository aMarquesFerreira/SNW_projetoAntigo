import { NextFunction, Response } from "express";
import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { IVehicleTypeDTO } from "../dto/IVehicleTypeDTO";
import IDriverTypeService from "./IServices/IDriverTypeService";
import INodeService from "./IServices/INodeService";
import ISneakersService from "./IServices/ISneakersService";
import IImporterService from "./IServices/IImporterService";
import ITravelLineService from "./IServices/ITravelLineService";
import IVehicleTypeService from "./IServices/IVehicleTypeService";
import { ITravelLineDTO } from "../dto/ITravelLineDTO";
import { INodeDTO } from "../dto/INodeDTO";
import { IDriverTypeDTO } from "../dto/IDriverTypeDTO";
import ISneakersRepo from "./IRepos/ISneakersRepo";
import { ISneakersDTO } from "../dto/ISneakersDTO";

@Service()
export default class ImporterService implements IImporterService {
    constructor(
        @Inject(config.services.driverType.name) private driverTypeService: IDriverTypeService,
        @Inject(config.services.node.name) private nodeService: INodeService,
        @Inject(config.services.sneakers.name) private sneakersService: ISneakersService,
        @Inject(config.services.travelLine.name) private travelLineService: ITravelLineService,
        @Inject(config.services.vehicleType.name) private vehicleTypeService: IVehicleTypeService
    ) { }

    public async importData(filePath: { filePath: string; }, res: Response, next: NextFunction) {
        const xml2js = require('xml2js');
        const fs = require('fs');
        const parser = new xml2js.Parser({ attrkey: "ATTR" });

        var vehicleTypes;
        var travelLines;
        var nodes;
        var sneakers;
        var driverTypes;

        let xml_string;
        try {
            xml_string = fs.readFileSync(filePath.filePath, "utf8");
        } catch (e) {
            return res.status(402).send('The file is not known by the system.');
        }
        parser.parseString(xml_string, function (error, result) {
            try {
                vehicleTypes = result['GlDocumentInfo']['world'][0]['GlDocument'][0]['GlDocumentNetwork'][0]['Network'][0]['VehicleTypes'][0]['VehicleType'];
            } catch (error) {
                console.log('There are no VehicleTypes in the XML File.')
            }
            try {
                travelLines = result['GlDocumentInfo']['world'][0]['GlDocument'][0]['GlDocumentNetwork'][0]['Network'][0]['Lines'][0]['Line'];
            } catch (error) {
                console.log('There are no TravelLines in the XML File.')
            }
            try {
                nodes = result['GlDocumentInfo']['world'][0]['GlDocument'][0]['GlDocumentNetwork'][0]['Network'][0]['Nodes'][0]['Node'];
            } catch (error) {
                console.log('There are no Nodes in the XML File.')
            }
            try {
                sneakers = result['GlDocumentInfo']['world'][0]['GlDocument'][0]['GlDocumentNetwork'][0]['Network'][0]['Sneakers'][0]['Sneaker'];
            } catch (error) {
                console.log('There are no Sneakers in the XML File.')
            }
            try {
                driverTypes = result['GlDocumentInfo']['world'][0]['GlDocument'][0]['GlDocumentNetwork'][0]['Network'][0]['DriverTypes'][0]['DriverType'];
            } catch (error) {
                console.log('There are no DriverTypes in the XML File.')
            }
        });
        await this.importVehicles(vehicleTypes, res, next);
        if (res.statusCode == 402) {
            return;
        }
        // await this.importTravelLines(travelLines, paths, nodes, res, next);
        // if (res.statusCode == 402) {
        //     return;
        // }
        await this.importNodes(nodes, res, next);
        if (res.statusCode == 402) {
            return;
        }
        await this.importDriverTypes(driverTypes, res, next);
        if (res.statusCode == 402) {
            return;
        }
        // await this.importSneakers(sneakers, res, next);
        // if (res.statusCode == 402) {
        //     return;
        // }
        //return res.status(201).send('File imported with no errors');
    }

    public async importVehicles(vehicles: any, res: Response, next: NextFunction) {
        for (let index = 0; index < vehicles.length; index++) {
            try {
                const vehicleTypeOrError = await this.vehicleTypeService.createVehicleType({
                    vehicleId: vehicles[index].ATTR.key,
                    name: vehicles[index].ATTR.Name,
                    autonomy: parseInt(vehicles[index].ATTR.Autonomy, 10),
                    cost: parseFloat(vehicles[index].ATTR.Cost),
                    averageSpeed: parseInt(vehicles[index].ATTR.AverageSpeed, 10),
                    energySource: { fuelType: parseInt(vehicles[index].ATTR.EnergySource, 10) },
                    consumption: parseFloat(vehicles[index].ATTR.Consumption),
                    emissions: parseInt(vehicles[index].ATTR.Emissions, 10)
                } as IVehicleTypeDTO) as Result<IVehicleTypeDTO>;

                if (vehicleTypeOrError.isFailure) {
                    return res.status(402).send('There was an error in the VehicleTypes')
                }
            } catch (e) {
                return res.status(402).send('There was an error in the VehicleTypes')
            }
        }
    }

    // public async importTravelLines(lines: any, paths: any, nodes: any, res: Response, next: NextFunction) {
    //     for (let index = 0; index < lines.length; index++) {
    //         var linePaths = lines[index]['LinePaths'][0]['LinePath'];

    //         let pathIndex = this.findPathIndex(linePaths[0].ATTR.Path, paths);
    //         let newTerminalNode1 = this.findNodeShortName(paths[pathIndex]['PathNodes'][0]['PathNode'][0].ATTR.NodeInit, nodes);
    //         let newTerminalNode2 = this.findNodeShortName(paths[pathIndex]['PathNodes'][0]['PathNode'][(paths[pathIndex]['PathNodes'][0]['PathNode'].length) - 1].ATTR.NodeEnd, nodes);

    //         let newLinePaths = [];
    //         for (let index1 = 0; index1 < linePaths.length; index1++) {
    //             let newPathId = linePaths[index1].ATTR.Path.split(':')[1];
    //             let newOrientation = linePaths[index1].ATTR.Orientation;
    //             newLinePaths.push({
    //                 pathId: newPathId,
    //                 orientation: newOrientation
    //             });
    //         }
    //         try {
    //             const travelLineOrError = await this.travelLineService.createTravelLine({
    //                 code: lines[index].ATTR.key,
    //                 name: lines[index].ATTR.Name,
    //                 color: lines[index].ATTR.Color,
    //                 terminalNode1: newTerminalNode1,
    //                 terminalNode2: newTerminalNode2,
    //                 linePaths: newLinePaths
    //             } as ITravelLineDTO) as Result<ITravelLineDTO>;

    //             if (travelLineOrError.isFailure) {
    //                 return res.status(402).send('There was an error in the TravelLines');
    //             }
    //         } catch (e) {
    //             return res.status(402).send('There was an error in the TravelLines');
    //         }
    //     }
    // }

    public async importNodes(nodes: any, res: Response, next: NextFunction) {
        for (let index = 0; index < nodes.length; index++) {
            try {
                var newDuration;
                if (nodes[index]['CrewTravelTimes'][0] == '') {
                    newDuration = 0;
                } else {
                    newDuration = parseInt(nodes[index]['CrewTravelTimes'][0]['CrewTravelTime'][0].ATTR.Duration, 10);
                }
                const nodeOrError = await this.nodeService.createNode({
                    fullName: nodes[index].ATTR.Name,
                    coordinates: {
                        latitude: parseFloat(nodes[index].ATTR.Latitude),
                        longitude: parseFloat(nodes[index].ATTR.Longitude)
                    },
                    shortName: nodes[index].ATTR.ShortName,
                    isDepot: (nodes[index].ATTR.IsDepot == "true"),
                    isReliefPoint: (nodes[index].ATTR.IsReliefPoint == "true"),
                    crewTravelTime: { duration: newDuration },
                } as INodeDTO) as Result<INodeDTO>;

                if (nodeOrError.isFailure) {
                    return res.status(402).send('There was an error in the Nodes')
                }
            } catch (e) {
                return res.status(402).send('There was an error in the Nodes')
            }
        }
    }

    public async importDriverTypes(drivers: any, res: Response, next: NextFunction) {
        for (let index = 0; index < drivers.length; index++) {
            try {
                const driverTypeOrError = await this.driverTypeService.createDriverType({
                    name: { name: drivers[index].ATTR.Name },
                    code: { code: drivers[index].ATTR.Code },
                    description: { description: drivers[index].ATTR.Description },
                } as IDriverTypeDTO) as Result<IDriverTypeDTO>;

                if (driverTypeOrError.isFailure) {
                    return res.status(402).send('There was an error in the DriverTypes');
                }
            } catch (e) {
                return res.status(402).send('There was an error in the DriverTypes');
            }
        }
    }

    // public async importSneakers(sneakers: any, res: Response, next: NextFunction) {
    //     for (let index = 0; index < sneakers.length; index++) {
    //         try {
    //             const sneakersOrError = await this.sneakersService.createSneakers({
    //                 code: { code: sneakers[index].ATTR.Code },
    //                 size: { size: sneakers[index].ATTR.Size },
    //                 name: { name: sneakers[index].ATTR.Name },
    //                 condition: { condition: sneakers[index].ATTR.Condition },
    //             } as ISneakersDTO) as Result<ISneakersDTO>;

    //             if (sneakersOrError.isFailure) {
    //                 return res.status(402).send('There was an error in the Sneakers')
    //             }
    //         } catch (e) {
    //             return res.status(402).send('There was an error in the Sneakers')
    //         }
    //     }
    // }

    private findNodeShortName(nodeKey: string, nodes: any): string {
        for (let index1 = 0; index1 < nodes.length; index1++) {
            if (nodes[index1].ATTR.key === nodeKey) {
                return nodes[index1].ATTR.ShortName;
            }
        }
        return null;
    }


}