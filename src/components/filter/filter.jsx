import PropTypes from 'prop-types';
export default function Filter({ onChange, filter }) {
  return (
    <input
      onChange={onChange}
      value={filter}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      placeholder="find contact by name"
    />
  );
}
