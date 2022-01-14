import { createAction } from '@reduxjs/toolkit';
import { AudioPlayerObject } from '../../interfaces/AudioPlayerInterfaces';

export const setAudioPlayer =
  createAction<AudioPlayerObject>('SET_AUDIO_PLAYER');
