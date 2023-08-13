import { Player } from "./playerTypes";

export interface BoardSpace {
    type: SpaceType;
    owner: Player | null;
    //  propiedades relevantes
  }
  
  export enum SpaceType {
    Property = 'Property',
    Tax = 'Tax',
    Chance = 'Chance',
    CommunityChest = 'CommunityChest',
    //  tipos de espacio
  }