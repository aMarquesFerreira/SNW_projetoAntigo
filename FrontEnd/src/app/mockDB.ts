import { DriverType } from './driverType';
import { TravelLine } from './travelLine';
import { Node } from './node';
import { VehicleType } from './vehicleType';

export const DRIVERTYPES: DriverType[] = [
  {
    name: 'Júlio Isidro',
    code: 'JI',
    description: 'O Júlio Isidro conduz apenas autocarros elétricos'
  },
  {
    name: 'Marco Paulo',
    code: 'MP',
    description: 'O Marco Paulo conduz apenas autocarros a GPL'
  },
  {
    name: 'João Didelet',
    code: 'JD',
    description: 'Tu não lês mas o João Didelet'
  },
];

/*export const VEHICLETYPES: VehicleType[] = [
  {
    vehicleId: 'T003',
    name: 'Táxi',
    autonomy: 8000,
    cost: 12,
    averageSpeed: 60,
    fuelType: 75,
    description: 'Elétrico',
    consumption: 10,
    emissions: 150,
  },
  {
    vehicleId: 'M002',
    name: 'MiniBus',
    autonomy: 35000,
    cost: 7,
    averageSpeed: 21,
    fuelType: 23,
    description: 'Gasóleo',
    consumption: 32,
    emissions: 1008,
  },
  {
    vehicleId: 'C001',
    name: 'Carrinha de Caixa Aberta',
    autonomy: 15000,
    cost: 3,
    averageSpeed: 26,
    fuelType: 1,
    description: 'Gasolina',
    consumption: 39,
    emissions: 14053,
  },
]*/

export const NODES: Node[] = [
  {
    shortName: 'AA',
    fullName: 'AAAAAAA',
    coordinates: {
      props: {
        latitude: 23.362626,
        longitude: -3.625623,
      }
    },
    isDepot: true,
    isReliefPoint: false,
    crewTravelTime: {
      props: {
        duration: 32
      }
    }
  },
]
/*
export const TRAVELLINES: TravelLine[] = [
  {
    code: "LA",
    name: "Linha da Azambuja",
    color: "Amarelo",
    terminalNode1: "ESTCMP",
    terminalNode2: "TEST",
    linePaths: "x",
  },
  {
    code: "LZ",
    name: "Linha da Zabujaaaa",
    color: "Verde",
    terminalNode1: "ESTSB",
    terminalNode2: "ESTCMP",
    linePaths: "x",
  },
  {
    code: "TE",
    name: "Linha do Testeeee",
    color: "Azul",
    terminalNode1: "ESTSB",
    terminalNode2: "TEST",
    linePaths: "x",
  }, 
] */ 