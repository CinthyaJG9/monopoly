import { Player } from "../interfaces/playerTypes";
import { numSpacesOnBoard } from "../libs/constants";

// Función para mover la ficha del jugador
function movePlayer(player: Player, spaces: number) {
    player.position = (player.position + spaces) % numSpacesOnBoard;
  }

  // Función para verificar si una tirada de dados es inválida
function isInvalidRoll(roll1: number, roll2: number): boolean {
  return roll1 === 1 && roll2 === 1; // Si ambos dados son 1, la tirada es inválida
}

// Función para verificar si un jugador debe ir a la cárcel por lanzar dobles tres veces seguidas
function checkTripleDoubles(player: Player): boolean {
    if (player.consecutiveDoubles >= 3) {
      player.consecutiveDoubles = 0;
      return true;
    }
    return false;
  }
  
  