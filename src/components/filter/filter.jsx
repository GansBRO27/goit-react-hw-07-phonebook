import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactSlise';

export default function Filter() {
  // const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  const handleChangeFilter = e => {
    // dispatch(filterContacts(e.currentTarget.value));
  };
  return (
    <input
      onChange={handleChangeFilter}
      // value={filter}
      type="text"
      name="filter"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      placeholder="find contact by name"
    />
  );
}
