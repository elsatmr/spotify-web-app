import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import logo from '../HeaderBar/yoodli-logo.png';
import style from './HomePageHeaderBar.module.css';

const HomePageHeaderBar = () => {
  return (
    <div className={style.barContainer}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" style={{ background: 'white' }} elevation={1}>
          <Toolbar>
            <div className={style.logoContainer}>
              <img className={style.logo} src={logo} alt="yarbis" />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HomePageHeaderBar;
