import { Player } from "../interfaces/playerTypes";

// Función para lanzar los dados y determinar el jugador inicial
function rollDice(): number {
    return Math.floor(Math.random() * 6) + 1; // Simulando un dado de 6 caras
  }
  
  // Determinar el jugador inicial
  function determineStartingPlayer(players: Player[]): Player {
    const rolls = players.map(player => ({ player, roll: rollDice() }));
    rolls.sort((a, b) => b.roll - a.roll);
    return rolls[0].player;
  }
  
  // Función para verificar si se lanzaron dados dobles
function isDouble(roll1: number, roll2: number): boolean {
    return roll1 === roll2;
  }

  // Función para verificar si una tirada de dados es inválida
function isInvalidRoll(roll1: number, roll2: number): boolean {
    return roll1 === 1 && roll2 === 1; // Si ambos dados son 1, la tirada es inválida
  }
  