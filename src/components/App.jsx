import ContactForm from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import { GlobalStyle } from '../GlobalStyle';
import { CommonBox } from './Form/Form.styled';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from 'redux/operations';
import { getTasks } from 'redux/selectors';
import { getContacts } from './redux/contactsSlice';

export function App() {
  const dispatch = useDispatch();
    const { contacts, isLoading, error } = useSelector(getContacts);
  return (
    <div>
      <CommonBox>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
      </CommonBox>
      <CommonBox>
        <Section title="Contacts">
          <Filter />

          <Contacts />
        </Section>
      </CommonBox>
      <GlobalStyle />
    </div>
  );
}
