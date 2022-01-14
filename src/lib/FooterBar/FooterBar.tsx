import { AppBar } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import styles from './FooterBar.module.css';

const FooterBar = () => {
  const audioPlayerObject = useAppSelector(
    (state) => state.audioPlayer.audioInfo
  );

  return (
    <div>
      <AppBar
        position="fixed"
        style={{ minHeight: '10%', background: '#212121' }}
        sx={{ top: 'auto', bottom: 0 }}
      >
        <div className={styles.parentContainer}>
          <div className={styles.rightItemsContainer}>
            <div className={styles.imgContainer}>
              <img src={audioPlayerObject.artwork} alt="yarbis" />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.itemName}>
                {audioPlayerObject.trackName}
              </div>
              <div className={styles.artistName}>
                {audioPlayerObject.artistName}
              </div>
            </div>
          </div>
          <div className={styles.audioControlContainer}>
            <audio controls key={audioPlayerObject.audioKey} autoPlay>
              {console.log(audioPlayerObject.audioKey)}
              <source src={audioPlayerObject.trackURL} />
            </audio>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default FooterBar;
