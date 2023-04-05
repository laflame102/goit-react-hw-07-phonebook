import { List, Item } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getSearchingContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getSearchingContacts();

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
