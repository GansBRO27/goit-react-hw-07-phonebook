import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlise';
export default function ContactList({ onClick }) {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );
  const onDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ul>
      {visibleContacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <li key={name}>
            <p>{name}</p>
            <p>{number}</p>
            <button onClick={() => onDelete(id)} name={id}>
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
