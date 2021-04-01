import React from 'react';
import { Button, ListItem, List } from '@material-ui/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations, contactsSelector } from '../../redux/contacts';
import s from './ContactList.module.css';
import PhoneList from './fade.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  const items = useSelector(contactsSelector.getVisibleContacts);
  const onDeleteNumber = id => dispatch(contactsOperations.deleteContacts(id));

  return (
    <TransitionGroup component={List}>
      {items.map(item => (
        <CSSTransition key={item.id} timeout={250} classNames={PhoneList}>
          <ListItem key={item.id} className={s.item}>
            <span>
              {item.name}:<span> </span>
              {item.number}
            </span>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={() => onDeleteNumber(item.id)}
            >
              Delete
            </Button>
          </ListItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}
