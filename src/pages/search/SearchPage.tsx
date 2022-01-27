import React from 'react';
import AlbumsCarousel from '../../lib/AlbumsCarousel/AlbumsCarousel';
import ArtistCarousel from '../../lib/ArtistsCarousel/ArtistsCarousel';
import FooterBar from '../../lib/FooterBar/FooterBar';
import HeaderBar from '../../lib/HeaderBar/HeaderBar';
import ShowsCarousel from '../../lib/ShowsCarousel/ShowsCarousel';
import SongsCarousel from '../../lib/SongsCarousel/SongsCarousel';
import { useAppSelector } from '../../redux/hooks';
import styles from './SearchPage.module.css';

const SearchPage = () => {
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
};

export default SearchPage;
