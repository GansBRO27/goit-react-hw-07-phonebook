import PropTypes from 'prop-types';
import Input from './number.styled';
export default function Number({ onChange, value }) {
  return (
    <Input
      value={value}
      type="tel"
      name="number"
      pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
      onChange={onChange}
    />
  );
}
Number.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};
