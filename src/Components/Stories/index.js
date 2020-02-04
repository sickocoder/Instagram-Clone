import React from 'react';
import { FlatList, Text, Image } from 'react-native';

import { Container, StorieContainer, StorieBubble } from './styles';

import Sample from '../../../assets/sample.png';

const data = [
  {
    id: 1,
    name: 'pedroloos',
  },
  {
    id: 2,
    name: 'joaotony',
  },
  {
    id: 3,
    name: 'raytony',
  },
  {
    id: 4,
    name: 'batistagatuno',
  },
  {
    id: 5,
    name: 'jossano',
  },
  {
    id: 6,
    name: 'caio',
  },
  {
    id: 7,
    name: 'nurio57',
  },
  {
    id: 8,
    name: 'pedroloos',
  },
];

export default function Stories() {
  return (
    <Container>
      <FlatList
        data={data}
        keyExtractor={user => data.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ index, item }) => (
          <StorieContainer style={{ marginLeft: index === 0 ? 16 : 0 }}>
            <StorieBubble>
              <Image
                source={Sample}
                style={{ width: 70, height: 70, borderRadius: 35 }}
              />
            </StorieBubble>
            <Text style={{ fontSize: 12 }}>{item.name}</Text>
          </StorieContainer>
        )}
      />
    </Container>
  );
}
