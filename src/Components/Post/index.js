import React from 'react';
import { View, Text, Image, ActivityIndicator, Dimensions } from 'react-native';

import { Container, PostHeader, PostHeaderTitle } from './styles';

import { Feather } from '@expo/vector-icons';

export default function Post({ data }) {
  const screenWidth = Math.round(Dimensions.get('window').width) / 460.0;

  return (
    <Container
      style={{
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.1)',
        paddingBottom: 16,
      }}
    >
      <PostHeader>
        <PostHeaderTitle>
          <Feather
            style={{
              marginRight: 10,
              borderRadius: 20,
              padding: 6,
              borderWidth: 1,
              borderColor: '#000',
            }}
            name="user"
            size={16}
          />
          <Text style={{ fontWeight: '600', fontSize: 17 }}>{data.login}</Text>
        </PostHeaderTitle>
        <Feather name="more-vertical" size={24} />
      </PostHeader>
      <Image
        source={{ uri: data.avatar_url }}
        style={{ width: '100%', aspectRatio: screenWidth }}
        PlaceholderContent={<ActivityIndicator color="#ff0000" />}
      />
      <PostHeader>
        <PostHeaderTitle>
          <Feather name="heart" size={24} style={{ marginRight: 10 }} />
          <Feather
            name="message-circle"
            size={24}
            style={{ marginRight: 10 }}
          />
          <Feather name="send" size={24} />
        </PostHeaderTitle>
        <Feather name="bookmark" size={24} />
      </PostHeader>
      <View style={{ paddingHorizontal: 12 }}>
        <Text>Curtido por José Tony e outros três</Text>
        <Text>
          {data.login} Seriedade nos olhos de um bom programador! Seja
          autêntico!!
        </Text>
      </View>
    </Container>
  );
}
