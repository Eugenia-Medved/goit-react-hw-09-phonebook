import React, { Component } from 'react';
import { Button, Input, Box, FormLabel } from '@material-ui/core';
import shortid from 'shortid';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { contactsOperations, contactsSelector } from '../../redux/contacts';
// import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    this.setState({
      name: e.currentTarget.value,
    });
  };

  handleChangeNumber = e => {
    this.setState({
      number: e.currentTarget.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (
      this.props.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      console.log(name);
      toast.error(`${name} is already in contacts!!!`);
      return;
    }

    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const nameId = shortid.generate();
    const telId = shortid.generate();

    return (
      <form onSubmit={this.handleSubmit}>
        <Box m={1}>
          <FormLabel for={nameId}> Name </FormLabel>
          <Input
            color="secondary"
            // className={s.input}
            id={nameId}
            type="text"
            value={name}
            onChange={this.handleChangeName}
          />
          <FormLabel for={telId}> Number </FormLabel>
          <Input
            color="secondary"
            // className={s.input}
            id={telId}
            type="text"
            value={number}
            onChange={this.handleChangeNumber}
          />
        </Box>
        <Button type="submit" variant="contained" color="secondary">
          Add contact
        </Button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelector.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (nam, tel) => dispatch(contactsOperations.addContact(nam, tel)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
