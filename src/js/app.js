import defaultData, {
  GameSavingData,
  readGameSaving as loadGame,
  writeGameSaving as saveGame,
} from "../../game.js";

const game = new Game();
game.start();
// console.log(defaultData, GameSavingData, loadGame, saveGame);
