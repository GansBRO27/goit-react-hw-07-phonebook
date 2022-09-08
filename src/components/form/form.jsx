import { Component } from 'react';
import Input from '../label/label';
import InputLabel from '../label/inputLabel';
import Button from '../button/button';
import Number from '../number/number';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    return this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <InputLabel label="name">
          <Input value={this.state.name} change={this.handleChange} />
        </InputLabel>
        <InputLabel>
          <Number value={this.state.number} onChange={this.handleChange} />
        </InputLabel>
        <Button />
      </form>
    );
  }
}
