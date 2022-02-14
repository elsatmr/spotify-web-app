import React from 'react';
import styles from './ShowsCarouselItem.module.css';

interface Props {
  artwork: string;
  name: string;
}

export const ShowsCarouselItem = ({ artwork, name }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={artwork} alt="yarbis" />
      </div>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.typeName}>Shows</div>
    </div>
  );
};

export default ShowsCarouselItem;
