import React from "react";
import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = () => {
  const location = useLocation();
  const {name, email} = location.state.contact;
  return (
  <div className="main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',  height: '50%' }}>
    <div className="ui card centered" style={{ minHeight: '30px', width: '40%', padding: '10px' }}>
      <div className="image">
        <img src={user} alt="user" />
      </div>
      <div className="content">
        <div className="header">{name}</div>
        <div className="description">{email}</div>
      </div>
    </div>
    <Link to='/'>
      <div className="center-div">
        <button className="ui small blue button" style={{ marginBottom: "15px" }}>Contact List</button>
      </div>
    </Link>
  </div>
  );
};

export default React.memo(ContactDetails);