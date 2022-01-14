import { createReducer } from '@reduxjs/toolkit';
import {
  clearSearchItemAction,
  getSearchItemAction,
} from '../actions/SearchActions';
import {
  SearchState,
  SearchObject,
} from '../../interfaces/SearchItemInterfaces';

const initialState: SearchState = {
  item: [],
  isEmpty: true,
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
        artistName: obj.artistName,
        albumName: obj.albumName,
        genreNames: obj.genreNames,
        url: obj.url,
        audioKey: obj.audioKey,
      };
      state.item.push(res);
      state.isEmpty = false;
      return console.log('Success');
    });
  });
  builder.addCase(getSearchItemAction.rejected, (state, action) => {});
  builder.addCase(clearSearchItemAction, (state, action) => {
    state.item = [];
    state.isEmpty = true;
  });
});
