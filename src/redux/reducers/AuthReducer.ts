import { createReducer } from '@reduxjs/toolkit';
import { stat } from 'fs';
import { AuthState } from '../../interfaces/AuthInterfaces';
import { getAccessToken, getAuthCode } from '../actions/AuthActions';

export const initialAuthState: AuthState = {
  isAuthenticated: false,
  accessToken: '',
};

export const auth = createReducer(initialAuthState, (builder) => {
  builder.addCase(getAuthCode.pending, (state, action) => {});
  builder.addCase(getAuthCode.fulfilled, (state, action) => {
    state.isAuthenticated = true;
  });
  builder.addCase(getAccessToken.pending, (state, action) => {});
  builder.addCase(getAccessToken.fulfilled, (state, action) => {
    state.accessToken = action.payload;
  });
  builder.addCase(getAccessToken.rejected, (state, action) => {});
});
