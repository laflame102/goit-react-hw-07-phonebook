import { List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  // selectContacts,
  // selectFilter,
  selectSearchingContact,
} from 'redux/selectors';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  // const filter = useSelector(selectFilter);
  // const contacts = useSelector(selectContacts);

  // const filteredContacts = useSelector(state =>
  //   selectSearchingContact(state, filter, contacts)
  // );

  const filteredContacts = useSelector(selectSearchingContact);

  return (
    <div>
      <List>
        {filteredContacts.map(({ id, name, phone }) => (
          <Item key={id}>
            <p>
              {name}: {phone}
            </p>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </Item>
        ))}
      </List>
    </div>
  );
};
