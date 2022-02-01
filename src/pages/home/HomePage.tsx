import { Button } from '@mui/material';
import React from 'react';
import HomePageHeaderBar from '../../lib/HomepageHeaderBar/HomepageHeaderBar';
import { getAccessToken, getAuthCode } from '../../redux/actions/AuthActions';
import { useAppDispatch } from '../../redux/hooks';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <HomePageHeaderBar />
      <Button
        variant="outlined"
        className={styles.loginButton}
        onClick={() => {
          dispatch(getAuthCode());
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default HomePage;
