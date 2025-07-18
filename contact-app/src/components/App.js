import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import api from '../api/contacts';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from "./ContactDetails";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Retrieve contacts
  const retrieveContacts = async() => {
    const response = await api.get("/contacts");
    return response.data;
  }

  // Add contact
  const addContactHandler = async(contact) => {
    const response = await api.post('/contacts', contact);
    setContacts([...contacts, response.data]);
  };

  // Edit contact
  const updateContactHandler = async(contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id, name, email } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...response.data} : contact;
      })
    );
  };

  // Delete contact
  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    // const retrievedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retrievedContacts) {
    //   const contactsWithIds = retrievedContacts.map(contact => ({
    //     ...contact, id: contact.id || v4()
    //   }));
    //   setContacts(contactsWithIds);
    // }
    // setIsLoaded(true);

    const getAllContacts = async() => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllContacts();
  }, []);

  useEffect(() => {
    // if (isLoaded) {
    //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // }
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
          <Route path="/edit"
            element={<EditContact updateContactHandler={updateContactHandler} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;