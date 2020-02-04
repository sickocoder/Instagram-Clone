import React, { useEffect, useState } from 'react';
import { Text, StatusBar, FlatList, Image } from 'react-native';

import { useSafeArea } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import axios from 'axios';

import { Container, Header, HeaderTitle, BottomNavigation } from './styles';

import Stories from '../../Components/Stories';
import Post from '../../Components/Post';

import InstaLogo from '../../../assets/InstaLogo.png';

export default function Home() {
  const insets = useSafeArea();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let response = await axios.get('http://api.github.com/users');
      setUsers(response.data);
    })();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container style={{ paddingTop: insets.top }}>
        <Header>
          <HeaderTitle>
            <Feather name="camera" size={24} style={{ marginRight: 12 }} />
            <Image source={InstaLogo} style={{ height: 32, width: 110 }} />
            {/* <Text style={{ fontSize: 18, fontStyle: 'italic' }}>Instagram</Text> */}
          </HeaderTitle>
          <Feather name="send" size={24} />
        </Header>
        <FlatList
          data={users}
          keyExtractor={user => user.id}
          renderItem={({ item, index }) => {
            if (index === 0) return <Stories />;
            return <Post data={item} />;
          }}
        />
        <BottomNavigation>
          <Feather name="home" size={24} />
          <Feather name="search" size={24} />
          <Feather name="plus-square" size={24} />
          <Feather name="heart" size={24} />
          <Feather name="user" size={24} />
        </BottomNavigation>
      </Container>
    </>
  );
}
