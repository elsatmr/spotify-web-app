import { createReducer } from '@reduxjs/toolkit';
import {
  AudioPlayerObject,
  AudioPlayerState,
} from '../../interfaces/AudioPlayerInterfaces';
import { setAudioPlayer } from '../actions/AudioPlayerActions';

const initialState: AudioPlayerState = {
  audioInfo: {} as AudioPlayerObject,
};

export const audioPlayer = createReducer(initialState, (builder) => {
  builder.addCase(setAudioPlayer, (state, action) => {
    state.audioInfo = action.payload;
  });
});
