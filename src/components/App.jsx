import { Component } from 'react';
import ContactForm from './form/form';

import Filter from './filter/filter';
import Title from './title.styled';
import ContactList from './list/list';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  reset = () => {};
  clickOnBtnDelete = e => {
    const arr = this.state.contacts.filter(
      contact => contact.id !== e.currentTarget.name
    );
    this.setState({
      contacts: arr,
    });
  };

  handleChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };
  formHandleSubmit = data => {
    if (
      this.state.contacts.filter(contact => contact.name === data.name).length >
      0
    ) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    this.setState({
      contacts: [
        {
          ...data,
          id: nanoid(),
        },
        ...this.state.contacts,
      ],
    });
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const visibleContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onSubmit={this.formHandleSubmit}></ContactForm>
        <Title>Contacts</Title>
        <Filter onChange={this.handleChangeFilter} filter={this.state.filter} />
        <ContactList
          contacts={visibleContact}
          onClick={this.clickOnBtnDelete}
        />
      </div>
    );
  }
}
