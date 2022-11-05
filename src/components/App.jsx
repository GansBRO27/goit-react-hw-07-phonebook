import FormHook from './form/form';
import Filter from './filter/filter';
import Title from './title.styled';
import ContactList from './list/list';
import { useSelector } from 'react-redux';
export function AppHook() {
  const contacts = useSelector(state => state.contacts.contacts);
  console.log(contacts);
  return (
    <div>
      <Title>Phonebook</Title>
      <FormHook></FormHook>
      {contacts.length > 0 ? (
        <>
          <Title>Contacts</Title>
          <Filter />
          <ContactList />
        </>
      ) : (
        'you not have contacts'
      )}
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
