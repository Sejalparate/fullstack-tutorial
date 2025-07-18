import React from "react";
import {Link} from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const {id, name, email} = props.contact;
  return (
    <div className="item" style={{ display: 'flex', alignItems: 'center', padding: '10px', borderBottom: '1px solid #ddd', minHeight: '60px' }}>
      <img
        className="ui avatar image" src={user} alt="user"
        style={{ width: '35px', height: '35px', marginRight: '10px', flexShrink: 0 }}
      />
      <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
        <div className="header" style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '4px' }}>{name}</div>
          <div style={{ fontSize: '14px', color: '#666' }}>{email}</div>
        </Link>
      </div>
      <Link to={'/edit'} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: "black", fontSize: '18px', cursor: 'pointer', marginLeft: '10px', flexShrink: 0 }}>
        </i>
      </Link>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", fontSize: '18px', cursor: 'pointer', marginLeft: '10px', flexShrink: 0 }}
        onClick={() => props.clickHandler(id)}>
      </i>
    </div>
  );
};

export default ContactCard;