import { Button } from '@mui/material';
import React, { useEffect } from 'react';
import HomePageHeaderBar from '../../lib/HomepageHeaderBar/HomepageHeaderBar';
import { getAccessToken, getAuthCode } from '../../redux/actions/AuthActions';
import { useAppDispatch } from '../../redux/hooks';
import styles from './HomePage.module.css';

const HomePage = () => {
  const dispatch = useAppDispatch();
  console.log(window.location.href.split('='));

  useEffect(() => {
    const url = window.location.href.split('=');
    if (url.length > 1) {
      console.log('here');
      const authCode = url[1];
      dispatch(getAccessToken(authCode));
    }
  });

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
