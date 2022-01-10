import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './yoodli-logo.png';
import styles from './HeaderBar.module.css';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getSearchItemAction } from '../../redux/actions/SearchActions';

const HeaderBar = () => {
  const dispatch = useAppDispatch();
  const [newSearch, setNewSearch] = useState<string>('');

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ background: '#FFFFFF' }}>
          <Toolbar>
            <div className={styles.iconContainerRight}>
              <img className={styles.logo} src={logo} alt="yarbis" />
              <div className={styles.searchBarWrapper}>
                <InputBase
                  className={styles.inputBase}
                  placeholder="Search"
                  value={newSearch}
                  onChange={(e) => setNewSearch(e.target.value)}
                  onKeyPress={async (ev) => {
                    if (ev.key === 'Enter') {
                      dispatch(getSearchItemAction([newSearch]));
                    }
                  }}
                />
                <SearchIcon
                  style={{ color: 'black' }}
                  className={styles.searchIconWrapper}
                  onClick={async () => {
                    dispatch(getSearchItemAction([newSearch]));
                  }}
                />
              </div>
              <MenuIcon />
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderBar;
