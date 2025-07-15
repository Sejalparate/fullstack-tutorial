import React, {useState, useEffect} from 'react';
import { v4 } from 'uuid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from "./ContactDetails";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id:v4(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrievedContacts) {
      const contactsWithIds = retrievedContacts.map(contact => ({
        ...contact, id: contact.id || v4()
      }));
      setContacts(contactsWithIds);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }
  }, [contacts, isLoaded]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes>
          <Route path="/"
            element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}
          />
          <Route path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route path="/contact/:id"
            element={<ContactDetails />} />
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;