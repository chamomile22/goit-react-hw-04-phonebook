import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleContactAdding = ({ name, number }) => {
    const contact = {
      name,
      number,
      id: nanoid(),
    };

    const foundName = contacts.find(({ name }) => name === contact.name);

    if (foundName) {
      alert(`${name} is already in your contacts.`);
      return;
    }
    setContacts(prevState => [...prevState, contact]);
  };

  const handleContactDeleting = contactId => {
    setContacts(prevState => prevState.filter(({ id }) => id !== contactId));
  };

  const handleFilterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = (() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  })();

  return (
    <>
      <h2>Phonebook</h2>
      <Form onSubmit={handleContactAdding} />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <Filter value={filter} onChange={handleFilterChange} />
      )}
      {contacts.length > 0 ? (
        <ContactList
          contacts={getFilteredContacts}
          onClickDelete={handleContactDeleting}
        />
      ) : (
        <p>No contacts here</p>
      )}
    </>
  );
};
