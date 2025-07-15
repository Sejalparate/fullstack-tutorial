import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={ deleteContactHandler } key={ contact.id }></ContactCard>
    );
  });

  return (
    <div style={{ marginTop: '20px' }}>
      <div style={{ paddingTop: '60px', display: 'flex', justifyContent: 'space-between', maxHeight: '90px', alignItems: 'center' }}>
        <h2 style={{ paddingTop: '10px' }}>Contact List</h2>
        <Link to="/add">
          <button className="ui small button blue right" style={{ maxWidth: '110px' }}>Add contact</button>
        </Link>
      </div>

      <div className="ui celled list" style={{ maxWidth: '100%', overflow: 'hidden' }}>
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;