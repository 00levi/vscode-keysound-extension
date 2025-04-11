import * as vscode from 'vscode';
import isWAV from "../helpers/isWAV";

const player = require('node-wav-player');


/**
 * Reproduce un sonido WAV en segundo plano
 */
const playSoundHandler = (filepath: string): void => {
  try {
    if (!filepath) { return; }
    if (!isWAV(filepath)) {
      const error = new Error("Only WAV files are supported.");
      throw error;
    }
    

    player.play({ path: filepath }).catch((err: any) => {
      vscode.window.showErrorMessage("Error al reproducir sonido: " + err.message);
    });

  } catch (error: any) {
    vscode.window.showErrorMessage(error.message);
  }
};

export default playSoundHandler;
