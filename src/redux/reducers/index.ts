import { search } from './SearchReducer';
import { audioPlayer } from './AudioPlayerReducer';

export const rootReducer = {
  reducer: { search, audioPlayer },
};
