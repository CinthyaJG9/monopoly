import { BoardSpace, SpaceType } from "../interfaces/boardTypes";
import { Player } from "../interfaces/playerTypes";

// Función para manejar las acciones según el espacio
function handleSpaceAction(player: Player, space: BoardSpace) {
    switch (space.type) {
      case SpaceType.Property:
        if (space.owner === null) {
          // El jugador puede comprar la propiedad
        } else if (space.owner !== player) {
          // El jugador debe pagar alquiler al propietario
        }
        break;
      case SpaceType.Tax:
        // El jugador debe pagar impuestos
        break;
      case SpaceType.Chance:
        // El jugador debe sacar una carta de Chance
        break;
      case SpaceType.CommunityChest:
        // El jugador debe sacar una carta de Community Chest
        break;
      // ... Otros casos 
    }
  }
  