import React from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SongsCarouselItem from '../SongsCarouselItem/SongsCarouselItem';
import { useAppSelector } from '../../redux/hooks';
import styles from './SongsCarousel.module.css';

const SongsCarousel = () => {
  const searchStateItems = useAppSelector((state) => state.search.track);
  return (
    <div>
      <div>
        <h2 className={styles.title}>Songs</h2>
      </div>
      <div>
        <Carousel
          show={5.5}
          slide={3}
          swiping={true}
          rightArrow={<KeyboardArrowRightIcon className={styles.arrows} />}
          leftArrow={<KeyboardArrowLeftIcon className={styles.arrows} />}
          infinite={false}
          responsive={true}
        >
          {searchStateItems.map((item) => {
            return (
              <div className={styles.carouselItemContainer}>
                <SongsCarouselItem
                  imgURL={item.artwork}
                  trackName={item.name}
                  artistName={item.artists}
                  trackURL={item.preview}
                  audioKey={item.audioKey}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default SongsCarousel;
