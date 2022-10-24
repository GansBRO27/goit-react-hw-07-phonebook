// import { Component } from 'react';
// import ContactForm from './form/form';
import FormHook from './form/form';
import Filter from './filter/filter';
import Title from './title.styled';
import ContactList from './list/list';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
export function AppHook() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  const contactsParse = localStorage.getItem('contacts');
  const parseContacts = JSON.parse(contactsParse);
  useEffect(() => {
    if (parseContacts) {
      setContacts(parseContacts);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const normalizeFilter = filter.toLowerCase();
  const visibleContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  const clickOnBtnDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value);
  };
  const formHandleSubmit = data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    setContacts(prevState => {
      return [
        ...prevState,
        { name: data.name, number: data.number, id: nanoid() },
      ];
    });
  };

  return (
    <div>
      <Title>Phonebook</Title>
      <FormHook onSubmit={formHandleSubmit}></FormHook>
      <Title>Contacts</Title>
      <Filter onChange={handleChangeFilter} filter={filter} />
      <ContactList contacts={visibleContact} onClick={clickOnBtnDelete} />
    </div>
  );
}
// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parseContacts = JSON.parse(contacts);
//     if (parseContacts) {
//       this.setState({ contacts: parseContacts });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       console.log('contacts did update');
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   clickOnBtnDelete = id => {
//     const arr = this.state.contacts.filter(contact => contact.id !== id);
//     this.setState({
//       contacts: arr,
//     });
//   };

//   handleChangeFilter = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };
//   formHandleSubmit = (name, number) => {
//     if (
//       this.state.contacts.filter(contact => contact.name === name).length > 0
//     ) {
//       alert(`${name} is already in contacts`);
//       return;
//     }

//     this.setState({
//       contacts: [
//         {
//           name: name,
//           number: number,
//           id: nanoid(),
//         },
//         ...this.state.contacts,
//       ],
//     });
//   };

//   render() {
//     const normalizeFilter = this.state.filter.toLowerCase();
//     const visibleContact = this.state.contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizeFilter)
//     );
//     return (
//       <div>
//         <Title>Phonebook</Title>
//         <FormHook onSubmit={this.formHandleSubmit}></FormHook>
//         <Title>Contacts</Title>
//         <Filter onChange={this.handleChangeFilter} filter={this.state.filter} />
//         <ContactList
//           contacts={visibleContact}
//           onClick={this.clickOnBtnDelete}
//         />
//       </div>
//     );
//   }
// }
