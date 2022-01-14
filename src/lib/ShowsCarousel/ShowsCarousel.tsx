import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import { ShowsCarouselItem } from '../ShowsCarouselItem/ShowsCarouselItem';
import styles from './ShowsCarousel.module.css';

const ShowsCarousel = () => {
  const searchStateItems = useAppSelector((state) => state.search.item);
  return (
    <div>
      <div>
        <h2 className={styles.title}>Shows</h2>
      </div>
      <div>
        {searchStateItems
          .filter((elem) => elem.type === 'show')
          .slice(0, 5)
          .map((elem) => {
            return (
              <div className={styles.container}>
                <ShowsCarouselItem
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

export default ShowsCarousel;
