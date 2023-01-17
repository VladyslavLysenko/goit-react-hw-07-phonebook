import React from 'react';
import PropTypes from 'prop-types';
import { ContactBtn,Wrapper } from './Contacts.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
export const ContactItem = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <Wrapper>
        <span>
          {name}:{phone}
        </span>
        <ContactBtn type="button" onClick={handleDelete}>
          Delete
        </ContactBtn>
      </Wrapper>
    </>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
