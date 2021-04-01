import React, { useState } from 'react';
import { Button, Input, Box, FormLabel, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="sm">
      <h1>Страница регистрации</h1>

      <form autoComplete="off" onSubmit={handleSubmit}>
        <Box display="flex">
          <Box m={1}>
            <FormLabel>Имя</FormLabel>
          </Box>
          <Box width="400">
            <Input
              color="secondary"
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </Box>
          <Box m={1}>
            <FormLabel>Почта</FormLabel>
          </Box>
          <Box width="400">
            <Input
              color="secondary"
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </Box>
          <Box m={1}>
            <FormLabel>Пароль</FormLabel>
          </Box>
          <Box width="400">
            <Input
              color="secondary"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box m={1}>
          <Button type="submit" variant="contained" color="secondary">
            Зарегистрироваться
          </Button>
        </Box>
      </form>
    </Container>
  );
}
