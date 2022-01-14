import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import logo from './yoodli-logo.png';
import styles from './HeaderBar.module.css';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch } from '../../redux/hooks';
import {
  clearSearchItemAction,
  getSearchItemAction,
} from '../../redux/actions/SearchActions';

const HeaderBar = () => {
  const dispatch = useAppDispatch();
  const [newSearch, setNewSearch] = useState<string>('');

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="fixed"
          style={{ background: '#000000' }}
          elevation={1}
        >
          <Toolbar>
            <div className={styles.iconContainerRight}>
              <div
                onClick={() => {
                  dispatch(clearSearchItemAction());
                }}
              >
                <img className={styles.logo} src={logo} alt="yarbis" />
              </div>
              <div className={styles.searchBarWrapper}>
                <InputBase
                  className={styles.inputBase}
                  placeholder="Search"
                  value={newSearch}
                  onChange={(e) => setNewSearch(e.target.value)}
                  onKeyPress={async (ev) => {
                    if (ev.key === 'Enter') {
                      dispatch(clearSearchItemAction());
                      dispatch(getSearchItemAction([newSearch]));
                    }
                  }}
                />
                <SearchIcon
                  style={{ color: 'black' }}
                  className={styles.searchIconWrapper}
                  onClick={async () => {
                    dispatch(clearSearchItemAction());
                    dispatch(getSearchItemAction([newSearch]));
                  }}
                />
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default HeaderBar;
