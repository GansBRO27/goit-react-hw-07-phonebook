// import * as actionst from '../contacts/actionst';
// import * as api from '../../services/api';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// // export const fetchContacts = () => async dispatch => {
// //   dispatch(actionst.fetchBooksRequest());
// //   try {
// //     const contacts = await api.fetchContacts();
// //     console.log(contacts);
// //     dispatch(actionst.fetchBooksSuccess(contacts));
// //   } catch (err) {
// //     dispatch(actionst.fetchBooksError(err));
// //   }
// // };

// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async () => {
//     try {
//       const contacts = await api.fetchContacts();

//       return contacts;
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );
// export const addContact = createAsyncThunk('contacts/addContact', async () => {
//   try {
//     const contact = await api.postContacts();

//     return contact;
//   } catch (error) {
//     console.log(error);
//   }
// });
