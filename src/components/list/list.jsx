import PropTypes from 'prop-types';
export default function ContactList({ contacts, onClick }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.name}>
            <p>{contact.name}</p>
            <p>{contact.number}</p>
            <button onClick={onClick} name={contact.id}>
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
