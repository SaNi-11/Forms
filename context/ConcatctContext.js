import { createContext, useState } from 'react';

const ConcatctContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactList, setContactList] = useState([]);

  const addContact = (firstName, lastName, email) => {
    let id = new Date().getTime();

    const newContact = {
      id: id,
      firstName,
      lastName,
      email,
    };

    setContactList([...contactList, newContact]);
  };

  const deleteContact = (id) => {
    const updatedContacts = contactList.filter((contact) => contact.id !== id);
    setContactList(updatedContacts);
  };

  return (
    <ConcatctContext.Provider
      value={{ addContact, contactList, deleteContact }}
    >
      {children}
    </ConcatctContext.Provider>
  );
};

export default ConcatctContext;
