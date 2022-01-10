import React, { useEffect } from 'react';
import HeaderBar from './lib/HeaderBar/HeaderBar';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { getAccessToken, getAuthCode } from './redux/actions/AuthActions';
import { accessURLObjects } from './utils/AuthUtils';
import { Carousel } from '@trendyol-js/react-carousel';
import CarouselItem from './lib/CarouselItem/CarouselItem';

function App() {
  const dispatch = useAppDispatch();
  const searchItemState = useAppSelector((state) => state.search.item);
  // let accessToken = useAppSelector((state) => state.auth.accessToken);
  let authCode = window.location.href.match(/code=([^&]*)/);
  useEffect(() => {
    if (authCode === null) {
      dispatch(getAuthCode()).then(
        (res) => (authCode = window.location.href.match(/code=([^&]*)/))
      );
    } else {
      accessURLObjects.code = authCode[1];
      dispatch(getAccessToken());
    }
  }, []);
  return (
    <div className="App">
      <HeaderBar />
      {/* <Carousel show={3} slide={3} swiping={true}>
        <CarouselItem title="blablabla" />
        <CarouselItem title="blablabla" />
        <CarouselItem title="blablabla" />
      </Carousel> */}
    </div>
  );
}

export default App;
