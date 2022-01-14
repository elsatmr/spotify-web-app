export interface SearchState {
  item: SearchObject[];
  isEmpty: boolean;
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
  audioKey?: string;
}
