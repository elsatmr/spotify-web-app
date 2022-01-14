import React, { useState } from 'react';
import styles from './SongsCarouselItem.module.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import { useAppDispatch } from '../../redux/hooks';
import { setAudioPlayer } from '../../redux/actions/AudioPlayerActions';

interface Props {
  imgURL: string;
  trackName: string;
  artistName?: string;
  trackURL?: string;
  audioKey?: string;
}

const CarouselItem = ({
  imgURL,
  trackName,
  artistName,
  trackURL,
  audioKey,
}: Props) => {
  const [imageHoverState, setImageHoverState] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const togglePlayPause = () => {
    setIsPlaying(true);
    dispatch(
      setAudioPlayer({
        isPlaying: true,
        artwork: imgURL,
        trackName: trackName,
        artistName: artistName,
        trackURL: trackURL,
        audioKey: audioKey,
      })
    );
  };

  return (
    <div className={styles.itemContainer}>
      <div
        className={styles.imageContainer}
        onMouseOver={() => {
          setImageHoverState(true);
        }}
        onMouseLeave={() => {
          setImageHoverState(false);
        }}
      >
        <div className={styles.imgButtonContainer}>
          <div>
            <img src={imgURL} alt="yarbis" />
          </div>
          {imageHoverState ? (
            <PlayCircleIcon
              className={styles.playButton}
              onClick={togglePlayPause}
            />
          ) : null}
        </div>
      </div>
      <div className={styles.itemName}>{trackName}</div>
      <div className={styles.typeName}>{artistName}</div>
    </div>
  );
};

export default CarouselItem;
