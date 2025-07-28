import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = ({ updateContactHandler }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name: initialName, email: initialEmail } = location.state.contact;
  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    updateContactHandler({ id, name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Contact</h2>
      <div style={{ background: "#ece9e9", padding: "30px", borderRadius: "10px" }}>
        <form className="ui form" onSubmit={update}>
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
          <button className="ui button blue">Update</button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(EditContact);
