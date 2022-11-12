import { Title } from 'components/App.styled';
import { ContactsItem, ContactsList } from './Contacts.styled';

const { Message, Button } = require('components/Form/Form.styled');

const Contact = ({ contacts, deleteContact }) => {
  return (
    <div>
      {contacts.length > 0 ? (
        <ContactsList>
          {contacts.map(({ name, number, id }) => {
            return (
              <ContactsItem key={id}>
                <Button onClick={() => deleteContact(id)} type="button">
                  Delete
                </Button>
                <Message>
                  {name}: {number}
                </Message>
              </ContactsItem>
            );
          })}
        </ContactsList>
      ) : (
        <Title>Contact list is empty</Title>
      )}
    </div>
  );
};
export default Contact;
