import * as vscode from 'vscode';
import playSoundHandler from '../handlers/playSoundHandler';
import keysoundHandler from '../handlers/keysoundHandler';
import Keysound from '../helpers/Keysound';

const keysoundInstance = new Keysound();

const autoPlaySoundCommand = (): void => {
  vscode.workspace.onDidChangeTextDocument((event: vscode.TextDocumentChangeEvent) => {
    const config = vscode.workspace.getConfiguration();

    if (config.get('keysound.enabled', false)) {
      const contentChanges = event.contentChanges;

      if (contentChanges.length > 0) {
        const text  = contentChanges[0].text;
        const ascii = text.charCodeAt(text.length - 1);
        const sound = keysoundHandler(ascii, keysoundInstance); // Pasa la instancia
        playSoundHandler(sound.soundPath);
      }
    }
  });
};

export default autoPlaySoundCommand;