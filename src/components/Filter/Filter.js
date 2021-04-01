import shortid from 'shortid';
import { Input, FormLabel } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, contactsSelector } from '../../redux/contacts';

export default function Filter() {
  const dispatch = useDispatch();

  const value = useSelector(contactsSelector.getFilter);
  const findId = shortid.generate();
  const onChange = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <FormLabel for={findId}>Find contacts by name</FormLabel>
      <Input
        color="secondary"
        id={findId}
        type="text"
        value={value}
        onChange={onChange}
      />
    </>
  );
}
