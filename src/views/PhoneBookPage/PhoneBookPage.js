import React, { useEffect } from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {
  clearError,
  contactsSelector,
  contactsOperations,
} from '../../redux/contacts';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList';

export default function PhoneBookPage() {
  const dispatch = useDispatch();
  const error = useSelector(contactsSelector.getError);
  const loading = useSelector(contactsSelector.getError);

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  useEffect(() => {
    error && toast.error('No Network');
    setTimeout(dispatch(clearError()), 500);
  }, [error, dispatch]);

  return (
    <>
      <Grid container direction="row" justify="center" alignItems="baseline">
        <Container maxWidth="sm">
          <CSSTransition
            in={true}
            appear={true}
            timeout={250}
            classNames="Logo"
            unmountOnExit
          >
            <h1>Phonebook</h1>
          </CSSTransition>
          <ContactForm />

          <Box m={1}>
            <Filter />
          </Box>
        </Container>
        <Container maxWidth="sm">
          {loading && (
            <Loader type="Rings" color="#00BFFF" height={200} width={200} />
          )}
          <ContactList />
        </Container>
      </Grid>
    </>
  );
}
