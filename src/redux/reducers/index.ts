import { search } from './SearchReducer';
import { audioPlayer } from './AudioPlayerReducer';
import { auth } from './AuthReducer';

export const rootReducer = {
  reducer: { search, audioPlayer, auth },
};
