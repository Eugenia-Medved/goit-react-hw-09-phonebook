import React, { useState } from 'react';
import { Button, Input, Box, FormLabel, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));

    setEmail('');
    setPassword('');
  };

  return (
    <Container maxWidth="sm">
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Почта
          <Input
            color="secondary"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </FormLabel>

        <FormLabel>
          Пароль
          <Input
            color="secondary"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </FormLabel>
        <Box m={1}>
          <Button type="submit" variant="contained" color="secondary">
            Войти
          </Button>
        </Box>
      </form>
    </Container>
  );
}
