import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contacts/contactApi';
export default function ContactList({ onClick }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  const { data } = useGetContactsQuery();
  console.log(data);
  const filter = useSelector(state => state.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  return (
    <ul>
      {visibleContacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.phone}</p>
            <button onClick={() => deleteContact(contact.id)} name={contact.id}>
              {isLoading ? 'loading...' : 'Delete'}
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
