import React from 'react';
import { Sections, Title } from './App.styled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';
import { useState, useEffect } from 'react';

export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts'))
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onChangeFilter = e => {
    setFilter(e.target.value);
  };

  const addContact = data => {
    setContacts(prevState => [...prevState, data]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  const state = { filter, contacts };
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  return (
    <Sections>
      <Title>Phonebook</Title>
      <Form addContact={addContact} state={state} contacts={contacts} />
      <Title>Contacts</Title>
      <Filter onChange={onChangeFilter} fiter={filter} value={filter}></Filter>
      <Contact contacts={visibleContacts} deleteContact={deleteContact} />
    </Sections>
  );
}
