import React, { Component } from 'react';
import { Button, Input, Label, Forma } from './Form.styled';
import { nanoid } from 'nanoid';

export class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    this.setState({ id: nanoid(4) });
    const contacts = this.props.state.contacts;
    contacts.forEach(contact => {
      const { name, number } = contact;
      if (
        // name.toLowerCase() === value.toLowerCase() ||
        number === value
      ) {
        alert(`${name} is already in contacts`);
        this.reset();
      }
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.reset();
    this.props.addContact(this.state);
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  visibleName = el => {
    const normaliseFilter = this.state.filter.toLowerCase();
    this.state.contacts.filter(el.name.toLowerCase().includes(normaliseFilter));
  };

  render() {
    return (
      <div>
        <Forma onSubmit={this.handleSubmit}>
          <Label>
            Name
            <Input
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
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
              value={this.state.number}
              onChange={this.handleInputChange}
              type="tel"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit" onClick={this.props.toggleModal}>
            Add contact
          </Button>
        </Forma>
      </div>
    );
  }
}
export default Form;
