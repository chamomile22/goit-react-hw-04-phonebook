import React from 'react';
import PropTypes from 'prop-types';
import { ContactsItem, BtnDelete } from './ContactList.styled';

export const ContactList = ({ contacts, onClickDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <ContactsItem key={id}>
              {name}: {number}
              <BtnDelete onClick={() => onClickDelete(id)}>Delete</BtnDelete>
            </ContactsItem>
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onClickDelete: PropTypes.func.isRequired,
};
