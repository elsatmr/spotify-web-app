import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ShowsCarouselItem } from '../ShowsCarouselItem/ShowsCarouselItem';
import styles from './ShowsCarousel.module.css';

const ShowsCarousel = () => {
  const searchStateItems = useAppSelector((state) => state.search.show);
  return (
    <div>
      <div>
        <h2 className={styles.title}>Shows</h2>
      </div>
      <div>
        {searchStateItems.slice(0, 5).map((elem) => {
          return (
            <div className={styles.container}>
              <ShowsCarouselItem artwork={elem.artwork} name={elem.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowsCarousel;
