import React from 'react';
import HeaderBar from './lib/HeaderBar/HeaderBar';
import { useAppSelector } from './redux/hooks';
import SongsCarousel from './lib/SongsCarousel/SongsCarousel';
import ArtistCarousel from './lib/ArtistsCarousel/ArtistsCarousel';
import { AlbumsCarousel } from './lib/AlbumsCarousel/AlbumsCarousel';
import FooterBar from './lib/FooterBar/FooterBar';
import styles from './App.module.css';
import ShowsCarousel from './lib/ShowsCarousel/ShowsCarousel';

function App() {
  const searchStateIsEmpty = useAppSelector((state) => state.search.isEmpty);
  const audioPlayerState = useAppSelector(
    (state) => state.audioPlayer.audioInfo
  );

  return (
    <div className={styles.main}>
      <div>
        <HeaderBar />
      </div>
      {searchStateIsEmpty ? null : (
        <div className={styles.carousels}>
          <SongsCarousel />
          <ArtistCarousel />
          <AlbumsCarousel />
          <ShowsCarousel />
        </div>
      )}
      {audioPlayerState.isPlaying ? <FooterBar /> : null}
    </div>
  );
}

export default App;
