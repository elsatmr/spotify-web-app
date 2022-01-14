import React from 'react';
import styles from './AlbumsCarouselItem.module.css';

interface Props {
  artwork: string;
  name: string;
  type: string;
}

export const AlbumsCarouselItem = ({ artwork, name, type }: Props) => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.imageContainer}>
        <img src={artwork} alt="yarbis" />
      </div>
      <div className={styles.itemName}>{name}</div>
      <div className={styles.typeName}>{type}</div>
    </div>
  );
};

export default AlbumsCarouselItem;
