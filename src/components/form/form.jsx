// import { Component } from 'react';
import Input from '../label/label';
import InputLabel from '../label/inputLabel';
import Button from '../button/button';
import Number from '../number/number';
import { useState } from 'react';

export default function FormHook({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.currentTarget.value);
  };
  const reset = () => {
    setName('');
    setNumber('');
  };
  const changeNumber = event => {
    setNumber(event.currentTarget.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <InputLabel label="name">
        <Input value={name} change={changeName} />
      </InputLabel>
      <InputLabel>
        <Number value={number} onChange={changeNumber} />
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
