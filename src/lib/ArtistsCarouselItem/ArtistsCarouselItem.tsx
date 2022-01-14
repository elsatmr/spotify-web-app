import React from 'react';
import styles from './ArtistsCarouselItem.module.css';

interface Props {
  artwork: string;
  name: string;
  type: string;
}

const ArtistCarouselItem = ({ artwork, name, type }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imgContainer}>
        <div className={styles.imgCircle}>
          <img src={artwork} alt="yarbis" />
        </div>
      </div>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.typeName}>{type}</div>
    </div>
  );
};

export default ArtistCarouselItem;
