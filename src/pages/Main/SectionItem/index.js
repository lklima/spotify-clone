import React from 'react';
import {FlatList} from 'react-native';

import {Container, SectionTitle} from './styles';
import Item from './Item';

const SectionItem = ({data}) => (
  <Container>
    <SectionTitle>{data.title}</SectionTitle>

    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data.albuns}
      renderItem={({item}) => <Item data={item} first={data.first} />}
    />
  </Container>
);

export default SectionItem;
