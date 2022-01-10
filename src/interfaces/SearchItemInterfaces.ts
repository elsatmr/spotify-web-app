export interface SearchState {
  item: SearchObject[];
}

export interface SearchObject {
  type: string;
  id: string;
  name: string;
  artwork: string;
  albumName?: string;
  artistName?: string;
  genreNames?: string;
  url?: string;
}
