import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authUrl, tokenUrl, accessURLObjects } from '../../utils/AuthUtils';

export const getAuthCode = createAsyncThunk('AuthReducer/GetAuth', async () => {
  window.location.href = authUrl;
  return true;
});

export const getAccessToken = createAsyncThunk(
  'AuthReducer/GetAccessToken',
  async (arg: string) => {
    accessURLObjects.code = arg;
    const res = axios.post(tokenUrl(), {
      headers: {
        Authorization: `Basic M2JhODZiOWZiYTY3NDYxZThjYmFiYjdhNjQ1ZWRmNDg6MjNiMGE4NWY0NDIwNGM2ZWFjYWJhNTBhODJjOGU0Njg=`,
      },
    });
    return 'abs';
  }
);
