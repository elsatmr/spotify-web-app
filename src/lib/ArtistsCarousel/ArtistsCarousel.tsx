import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import ArtistCarouselItem from '../ArtistsCarouselItem/ArtistsCarouselItem';
import styles from './ArtistsCarousel.module.css';

const ArtistCarousel = () => {
  const searchStateItems = useAppSelector((state) => state.search.item);
  return (
    <div>
      <h2 className={styles.title}>Artists</h2>
      <div>
        {searchStateItems
          .filter((elem) => elem.type === 'artist')
          .slice(0, 5)
          .map((elem) => {
            return (
              <div className={styles.container}>
                <ArtistCarouselItem
                  artwork={elem.artwork}
                  name={elem.name}
                  type={elem.type.charAt(0).toUpperCase() + elem.type.slice(1)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ArtistCarousel;
