import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { authUrl } from '../../utils/AuthUtils';
import { axiosServerRequest, Methods } from '../../utils/AxiosUtils';

export const getAuthCode = createAsyncThunk('AuthReducer/GetAuth', async () => {
  window.location.href = authUrl;
  return true;
});

export const getAccessToken = createAsyncThunk(
  'AuthReducer/GetAccessToken',
  async (authCode: string) => {
    const res = await axiosServerRequest<any>(
      Methods.GET,
      `/api/v1/auth/login/${authCode}`
    );
    return res.data;
  }
);

export const getRefreshToken = createAsyncThunk(
  'AuthReducer/GetRefreshToken',
  async (refreshToken: string) => {
    const res = await axiosServerRequest<any>(
      Methods.GET,
      `api/v1/auth/refresh/${refreshToken}`
    );
    return res.data;
  }
);
