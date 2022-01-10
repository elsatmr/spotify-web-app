import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authUrl, tokenUrl } from '../../utils/AuthUtils';

export const getAuthCode = createAsyncThunk('AuthReducer/GetAuth', async () => {
  window.location.href = authUrl;
  return true;
});

export const getAccessToken = createAsyncThunk(
  'AuthReducer/GetAccessToken',
  async () => {
    console.log(tokenUrl());
    const res = await axios.post(tokenUrl(), {
      headers: {
        Authorization: `Basic M2JhODZiOWZiYTY3NDYxZThjYmFiYjdhNjQ1ZWRmNDg6MjNiMGE4NWY0NDIwNGM2ZWFjYWJhNTBhODJjOGU0Njg=`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      data: 'grant_type=authorization_code',
    });
    console.log(res.data);
    return res.data.access_token;
  }
);
