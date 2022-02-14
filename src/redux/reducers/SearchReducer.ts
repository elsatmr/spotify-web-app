import { createReducer } from '@reduxjs/toolkit';
import {
  clearSearchItemAction,
  getSearchItemAction,
} from '../actions/SearchActions';
import {
  SearchState,
  AlbumObject,
  TrackObject,
  ShowObject,
  ArtistObject,
} from '../../interfaces/SearchItemInterfaces';

const initialState: SearchState = {
  album: [],
  track: [],
  artist: [],
  show: [],
  isEmpty: true,
};

export const search = createReducer(initialState, (builder) => {
  builder.addCase(getSearchItemAction.pending, (state, action) => {});
  builder.addCase(getSearchItemAction.fulfilled, (state, action) => {
    action.payload.albums.items.forEach(
      (element: { name: string; images: { url: string }[] }) => {
        let alb = {} as AlbumObject;
        alb.name = element.name;
        alb.artwork = element.images[0].url;
        state.album.push(alb);
      }
    );

    let key = 1;
    action.payload.tracks.items.forEach(
      (element: {
        name: string;
        album: { images: { url: string }[] };
        preview_url: string;
        artists: { name: string }[];
      }) => {
        let trck: TrackObject = {
          name: element.name,
          artwork: element.album.images[0].url,
          preview: element.preview_url,
          artists: element.artists[0].name,
          audioKey: key,
        };
        key++;
        state.track.push(trck);
      }
    );

    action.payload.artists.items.forEach(
      (element: { name: string; images: { url: string }[] }) => {
        let artist = {} as ArtistObject;
        artist.name = element.name;
        if (element.images.length > 0) {
          artist.artwork = element.images[0].url;
        }
        state.artist.push(artist);
      }
    );

    action.payload.shows.items.forEach(
      (element: { name: string; images: { url: string }[] }) => {
        let show: ShowObject = {
          name: element.name,
          artwork: element.images[0].url,
        };
        state.show.push(show);
      }
    );

    state.isEmpty = false;
  });
  builder.addCase(getSearchItemAction.rejected, (state, action) => {});
  builder.addCase(clearSearchItemAction, (state, action) => {
    state.album = [];
    state.track = [];
    state.artist = [];
    state.show = [];
    state.isEmpty = true;
  });
});
