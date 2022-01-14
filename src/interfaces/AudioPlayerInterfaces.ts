export interface AudioPlayerState {
  audioInfo: AudioPlayerObject;
}

export interface AudioPlayerObject {
  artwork: string;
  trackURL?: string;
  artistName?: string;
  trackName: string;
  isPlaying: boolean;
  audioKey?: string;
}
