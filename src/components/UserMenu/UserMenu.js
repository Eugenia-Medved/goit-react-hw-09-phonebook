import React, { useCallback } from 'react';
import { Avatar, Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.jpg';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUsername);
  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div style={styles.container}>
      <Avatar alt="Remy Sharp" src={defaultAvatar} />

      <span style={styles.name}>Welcome, {name}</span>
      <Button variant="contained" color="secondary" onClick={onLogout}>
        LogOut{' '}
      </Button>
    </div>
  );
}
