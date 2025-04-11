import Keysound, { KeysoundType } from '../helpers/Keysound';

const keysoundHandler = (key: any, keysound: Keysound): KeysoundType => {

  const soundData = keysound.getKeysounds().find(item => item.key === key);

  if (isNaN(key)) {
    return keysound.getKeysoundBackspace();
  }
  if (!soundData) {
    return keysound.getKeysoundDefault();
  }

  return soundData;
};

export default keysoundHandler;

