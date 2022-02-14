import { createReducer } from '@reduxjs/toolkit';

import { AuthState } from '../../interfaces/AuthInterfaces';
import {
  getAccessToken,
  getAuthCode,
  getRefreshToken,
} from '../actions/AuthActions';

export const initialAuthState: AuthState = {
  accessToken: '',
  refreshToken: '',
};

export const auth = createReducer(initialAuthState, (builder) => {
  builder.addCase(getAuthCode.pending, (state, action) => {});
  builder.addCase(getAuthCode.fulfilled, (state, action) => {});
  builder.addCase(getAccessToken.pending, (state, action) => {});
  builder.addCase(getAccessToken.fulfilled, (state, action) => {
    state.accessToken = action.payload.access_token;
    state.refreshToken = action.payload.refresh_token;
    window.sessionStorage.setItem('accessToken', state.accessToken);
    window.sessionStorage.setItem('refreshToken', state.refreshToken);
    console.log(
      'Initial access token: ',
      window.sessionStorage.getItem('accessToken')
    );
  });
  builder.addCase(getAccessToken.rejected, (state, action) => {});
  builder.addCase(getRefreshToken.pending, (state, action) => {});
  builder.addCase(getRefreshToken.fulfilled, (state, action) => {
    state.accessToken = action.payload.access_token;
    window.sessionStorage.setItem('accessToken', state.accessToken);
    console.log('New acc token', window.sessionStorage.getItem('accessToken'));
  });
});
