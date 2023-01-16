import axios from 'axios';

axios.defaults.baseURL =
  'https://63c59797e1292e5bea26fbb7.mockapi.io/contacts/';

export async function fetchBooks() {
  const { data } = await axios.get(`/contacts`);
  return data;
}
