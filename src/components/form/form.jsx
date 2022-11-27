import Input from '../label/label';
import InputLabel from '../label/inputLabel';
import Button from '../button/button';
import Number from '../number/number';
import { useState } from 'react';

import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contacts/contactApi';
export default function FormHook() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const changeName = event => {
    setName(event.currentTarget.value);
  };
  const changeNumber = event => {
    setPhone(event.currentTarget.value);
  };

  const formSubmitHandle = async data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      console.log(`${data.name} is already in contacts`);
      return;
    }

    try {
      await addContact(data);
      console.log('Contact added');
    } catch (error) {
      console.log('Something wrong... try again');
    }
  };
  const handleSubmit = event => {
    event.preventDefault();

    formSubmitHandle({ name, phone });

    formReset();
  };
  const formReset = () => {
    setName('');
    setPhone('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputLabel label="name">
        <Input value={name} change={changeName} />
      </InputLabel>
      <InputLabel>
        <Number value={phone} onChange={changeNumber} />
      </InputLabel>
      <Button />
    </form>
  );
}
// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };
//   handleChange = event => {
//     this.setState({
//       [event.currentTarget.name]: event.currentTarget.value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };
//   reset = () => {
//     return this.setState({
//       name: '',
//       number: '',
//     });
//   };
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <InputLabel label="name">
//           <Input value={this.state.name} change={this.handleChange} />
//         </InputLabel>
//         <InputLabel>
//           <Number value={this.state.number} onChange={this.handleChange} />
//         </InputLabel>
//         <Button />
//       </form>
//     );
//   }
// }
