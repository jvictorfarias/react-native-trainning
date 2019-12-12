import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Form, Input, SubmitButton } from './styles';
import api from '../../services/api';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  async function handleSubmit() {
    const response = await api.get(`/users/${user}`);

    const data = {
      name: response.data.name,
      login: response.data.login,
      bio: response.data.bio,
      avatar: response.data.avatar_url,
    };

    setUsers([...users, data]);
    setUser('');

    Keyboard.dismiss();
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="Add user"
          value={user}
          onChangeText={setUser}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>
          <Icon name="add" size={20} color="#fff" />
        </SubmitButton>
      </Form>
    </Container>
  );
}

Main.navigationOptions = {
  title: 'Users',
};
