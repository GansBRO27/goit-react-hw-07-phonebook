import PropTypes from 'prop-types';
export default function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li key={name}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onClick(id)} name={id}>
              delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.array,
  onClick: PropTypes.func,
};
