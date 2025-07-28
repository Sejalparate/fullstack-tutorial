import React from "react";
import {Link} from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
    );
  });

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
        <div className="ui search" style={{ flex: '1 1 300px' }}>
          <div className="ui icon input" style={{ width: '100%' }}>
            <input type="text" placeholder="Search" className="prompt"
              style={{ width: '100%', minWidth: '150px' }}
              value={ props.searchTerm } onChange={ (e) => props.searchKeyword(e.target.value) }/>
            <i className="search icon"></i>
          </div>
        </div>

        <Link to="/add" style={{ flexShrink: 0 }}>
          <button className="ui small button blue right">Add Contact</button>
        </Link>
      </div>

      <div className="ui celled list" style={{maxWidth: '100%', overflow: 'hidden'}}>
        { renderContactList.length > 0 ? renderContactList : "No results found" }
      </div>
    </>
  );
}

  export default React.memo(ContactList);