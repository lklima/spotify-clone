import React from 'react';
import {StatusBar, FlatList} from 'react-native';

import {Container} from './styles';
import {data} from '~/helpers/HomeSampleData';
import SectionItem from './SectionItem';
import MiniPlayer from '~/components/MiniPlayer';

const Main = () => (
  <Container>
    <StatusBar backgroundColor="black" barStyle="light-content" />

    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      renderItem={({item}) => <SectionItem data={item} />}
    />

    <MiniPlayer />
  </Container>
);

export default Main;
