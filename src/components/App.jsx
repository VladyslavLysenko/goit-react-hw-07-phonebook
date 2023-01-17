import ContactForm from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import { GlobalStyle } from '../GlobalStyle';
import { CommonBox } from './Form/Form.styled';

import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/operations';
import { getError, getIsLoading } from './redux/selectors';


export function App() {
  const dispatch = useDispatch();
   const isLoading = useSelector(getIsLoading);
   const error = useSelector(getError);
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

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
          {isLoading && !error && <b>Request in progress...</b>}
          <Contacts />
        </Section>
      </CommonBox>
      <GlobalStyle />
    </div>
  );
}
