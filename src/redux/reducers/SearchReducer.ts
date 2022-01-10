import { createReducer } from '@reduxjs/toolkit';
import { getSearchItemAction } from '../actions/SearchActions';
import {
  SearchState,
  SearchObject,
} from '../../interfaces/SearchItemInterfaces';
import { iteratorSymbol, objectTraps } from 'immer/dist/internal';

const initialState: SearchState = {
  item: [],
};

export const search = createReducer(initialState, (builder) => {
  builder.addCase(getSearchItemAction.pending, (state, action) => {});
  builder.addCase(getSearchItemAction.fulfilled, (state, action) => {
    action.payload.map((obj: any) => {
      const res: SearchObject = {
        type: obj.type,
        id: obj.id,
        name: obj.name,
        artwork: obj.artwork,
      };
      state.item.push(res);
    });
  });
  builder.addCase(getSearchItemAction.rejected, (state, action) => {});
});
