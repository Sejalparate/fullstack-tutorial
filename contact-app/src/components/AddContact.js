import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddContact = ({ addContactHandler }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div>
      <h2>Add Contact</h2>
      <div style={{ background: "#d9d6d6" }}>
        <form className="ui form" onSubmit={add}>
          <div className="field">
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="text" name="email" placeholder="Email" value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(AddContact);
