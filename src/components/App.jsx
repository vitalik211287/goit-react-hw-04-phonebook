import React, { Component } from 'react';
import { Sections, Title } from './App.styled';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import Contact from './Contact/Contact';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновилось поле контактс');
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  visibleName = el => {
    const normaliseFilter = this.state.filter.toLowerCase();
    this.state.contacts.filter(el.name.toLowerCase().includes(normaliseFilter));
  };
  addContact = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return (
      <Sections>
        <Title>Phonebook</Title>
        <Form
          formSubmitHandler={this.formSubmitHandler}
          addContact={this.addContact}
          state={this.state}
          contacts={contacts}
        />
        <Title>Contacts</Title>
        <Filter
          onChange={this.onChangeFilter}
          fiter={this.filter}
          value={this.filter}
        ></Filter>
        <Contact contacts={visibleName} deleteContact={this.deleteContact} />
      </Sections>
    );
  }
}
