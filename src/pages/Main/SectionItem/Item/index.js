import React from 'react';

import {
  Container,
  AlbumThumb,
  AlbumTitle,
  RandomIcon,
  BottomView,
} from './styles';

const Item = ({data, first}) => (
  <Container>
    <AlbumThumb first={first} source={{uri: data.thumb}} />
    <BottomView>
      <RandomIcon />

      <AlbumTitle>{data.title}</AlbumTitle>
    </BottomView>
  </Container>
);

export default Item;
