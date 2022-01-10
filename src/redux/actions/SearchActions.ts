import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosServerRequest, Methods } from '../../utils/AxiosUtils';

export const clearSearchItemAction = createAction<string>('CLEAR_SEARCH_ITEM');

export const getSearchItemAction = createAsyncThunk(
  'SearchReducer/getSearchItemAction',
  async (arg: string[]) => {
    const searchTerm = arg[0];
    // const authToken = arg[1];
    const res = await axiosServerRequest<any>(
      Methods.GET,
      `/api/v1/auth/search/${searchTerm}`
    );
    return res.data;
  }
);
