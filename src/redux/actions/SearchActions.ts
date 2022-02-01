import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { axiosServerRequest, Methods } from '../../utils/AxiosUtils';

export const clearSearchItemAction = createAction('CLEAR_SEARCH_ITEM');

export const getSearchItemAction = createAsyncThunk(
  'SearchReducer/getSearchItemAction',
  async (searchTerm: string) => {
    const accessToken = window.sessionStorage.getItem('accessToken');
    const res = await axiosServerRequest<any>(
      Methods.GET,
      `/api/v1/search/${searchTerm}/${accessToken}`
    );
    console.log(res.data);
    return res.data;
  }
);
