import React from 'react';

import {TouchableOpacity} from 'react-native';

import {
  Container,
  MusicThumb,
  MusicTitle,
  HeartIcon,
  PlayerIcon,
  SubTtile,
  TitleView,
} from './styles';

const MiniPlayer = () => (
  <Container>
    <MusicThumb
      source={{
        uri:
          'https://i.pinimg.com/736x/f4/1a/0c/f41a0cca915d212692d08b62240c4269.jpg',
      }}
    />

    <TitleView>
      <MusicTitle>
        Surreal - by Louis Futon added to Discover Weekly playlist
      </MusicTitle>

      <SubTtile>Louis Futon</SubTtile>
    </TitleView>

    <TouchableOpacity>
      <HeartIcon />
    </TouchableOpacity>

    <TouchableOpacity>
      <PlayerIcon />
    </TouchableOpacity>
  </Container>
);

export default MiniPlayer;
