export interface SearchState {
  album: AlbumObject[];
  artist: ArtistObject[];
  track: TrackObject[];
  show: ShowObject[];
  isEmpty: boolean;
}

export interface AlbumObject {
  name: string;
  artwork: string;
}

export interface TrackObject {
  name: string;
  artwork: string;
  preview: string;
  artists: string;
  audioKey: number;
}

export interface ArtistObject {
  name: string;
  artwork: string;
}

export interface ShowObject {
  name: string;
  artwork: string;
}
