import axios from 'axios';
axios.defaults.baseURL = ' https://637b17c010a6f23f7f9f2d44.mockapi.io';
export async function fetchContacts() {
  const contacts = await axios.get('/contacts');
  console.log(contacts.data);
  return contacts.data;
}
export async function postContacts() {
  const contact = await axios.post('/contacts');
}
export async function removeContact(id) {
  const contact = await axios.delete(`/contacts/${id}`);
}
