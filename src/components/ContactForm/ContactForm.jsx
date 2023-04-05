import { Formik } from 'formik';
import { Button, Form, Input, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={({ name, number }, actions) => {
        if (contacts.find(contact => contact.name === name)) {
          return alert(`${name} is already in contacts`);
        }
        dispatch(addContact({ name, number }));
        actions.resetForm();
      }}
    >
      <Form>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
