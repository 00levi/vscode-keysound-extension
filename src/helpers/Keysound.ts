
import path = require('path');

export type KeysoundType = {
  key       : string|number|boolean|null,
  name      : string,
  soundPath : string
};

class Keysound {

  private static rootPath: string = path.join(__dirname, '../../');

  public getKeysounds():KeysoundType[] {
    return [
      {
        key: 10,
        name: 'enter',
        soundPath: path.join(Keysound.rootPath, 'audio', 'enter.wav')
      },
      {
        key: 123,
        name: 'left_brace',
        soundPath: path.join(Keysound.rootPath, 'audio', 'keysound_click1.wav')
      },
      {
        key: 125,
        name: 'right_brace',
        soundPath: path.join(Keysound.rootPath, 'audio', 'keysound_click2.wav')
      },
      {
        key: 40,
        name: 'left_paren',
        soundPath: path.join(Keysound.rootPath, 'audio', 'open-close_2.wav')
      },
      {
        key: 41,
        name: 'right_paren',
        soundPath: path.join(Keysound.rootPath, 'audio', 'open-close_2.wav')
      },
      {
        key: 60,
        name: 'less_than',
        soundPath: path.join(Keysound.rootPath, 'audio', 'open-close_3.wav')
      },
      {
        key: 62,
        name: 'greater_than',
        soundPath: path.join(Keysound.rootPath, 'audio', 'open-close_3.wav')
      },
      {
        key: 36,
        name: 'dollar',
        soundPath: path.join(Keysound.rootPath, 'audio', 'close.wav')
      },
      {
        key: 64,
        name: 'at',
        soundPath: path.join(Keysound.rootPath, 'audio', 'close.wav')
      },
      {
        key: 61,
        name: 'equal',
        soundPath: path.join(Keysound.rootPath, 'audio', 'igual.wav')
      },
      {
        key: 45,
        name: 'dash',
        soundPath: path.join(Keysound.rootPath, 'audio', 'punto.wav')
      },
      {
        key: 95,
        name: 'underscore',
        soundPath: path.join(Keysound.rootPath, 'audio', 'punto.wav')
      },
      {
        key: 47,
        name: 'slash',
        soundPath: path.join(Keysound.rootPath, 'audio', 'open.wav')
      }

    ];
  }

  public getKeysoundDefault(): KeysoundType {
    return {
      key: 'other',
      name: 'default',
      soundPath: path.join(Keysound.rootPath, 'audio', 'open.wav')
    };
  }

  public getKeysoundBackspace(): KeysoundType {
    return {
      key: NaN,
      name: 'backspace',
      soundPath: path.join(Keysound.rootPath, 'audio', 'open-close_3.wav')
    };
  };

}

export default Keysound;
