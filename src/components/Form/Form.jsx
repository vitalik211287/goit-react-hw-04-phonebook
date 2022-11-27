import React from 'react';
import { Button, Input, Label, Forma } from './Form.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export function Form({ addContact, contacts }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const state = { id, name, number };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
    setId(nanoid(4));
    contacts.forEach(contact => {
      const { name, number } = contact;
      if (number === value) {
        alert(`${name} is already in contacts`);
        reset();
      }
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    reset();
    addContact(state);
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <Forma onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            name="name"
            value={name}
            onChange={handleInputChange}
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            name="number"
            value={number}
            onChange={handleInputChange}
            type="tel"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Forma>
    </div>
  );
}
export default Form;
