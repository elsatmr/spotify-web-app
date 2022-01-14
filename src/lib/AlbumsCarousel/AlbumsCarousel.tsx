import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { AlbumsCarouselItem } from '../AlbumsCarouselItem/AlbumsCarouselItem';
import styles from './AlbumsCarousel.module.css';

export const AlbumsCarousel = () => {
  const searchStateItems = useAppSelector((state) => state.search.item);
  return (
    <div>
      <div>
        <h2 className={styles.title}>Albums</h2>
      </div>
      <div>
        {searchStateItems
          .filter((elem) => elem.type === 'album')
          .slice(0, 5)
          .map((elem) => {
            return (
              <div className={styles.container}>
                <AlbumsCarouselItem
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

export default AlbumsCarousel;
