import React from 'react';
import styles from './AlbumsCarouselItem.module.css';

interface Props {
  artwork: string;
  name: string;
}

export const AlbumsCarouselItem = ({ artwork, name }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={artwork} alt="yarbis" />
      </div>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.typeName}>Album</div>
    </div>
  );
};

export default AlbumsCarouselItem;
