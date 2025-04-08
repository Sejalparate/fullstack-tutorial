import { useState } from "react";

function Login({ user }) {
  return (
    <div>
      <h4>Username: {user.name}</h4>
      <h4>Age: {user.age}</h4>
      <h4>Email: {user.email}</h4>
      <hr />
    </div>
  );
}

export function Profile({ name = "User" }) {
  return (
    <div style={{ color: "skyblue" }}>
      <h2>Hey {name}</h2>
      <hr />
    </div>
  );
}

export function Skills() {
  const [skills, setSkills] = useState([]);
  const [gender, setGender] = useState();
  const [city, setCity] = useState("Pune");

  const getSkills = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((item) => item !== event.target.value));
    }
  };

  return (
    <div>
      <h3>Select your Skills:</h3>
      <input
        onChange={getSkills}
        type="checkbox"
        id="mongodb"
        value="MongoDB"
      />
      <label htmlFor="mongodb"> MongoDB </label>

      <input
        onChange={getSkills}
        type="checkbox"
        id="python"
        value="Python"
      />
      <label htmlFor="python"> Python </label>

      <input
        onChange={getSkills}
        type="checkbox"
        id="react"
        value="React JS"
      />
      <label htmlFor="react"> React JS </label>

      <h3>Select Gender:</h3>
      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        checked={gender === "male"}
        name="gender"
        value="male"
        id="male"
      />
      <label htmlFor="male"> Male </label>

      <input
        type="radio"
        onChange={(event) => setGender(event.target.value)}
        checked={gender === "female"}
        name="gender"
        value="female"
        id="female"
      />
      <label htmlFor="female"> Female </label>

      <h3>Select City:</h3>
      <select
        onChange={(event) => setCity(event.target.value)}
        defaultValue={"Pune"}
      >
        <option value="pune">Pune</option>
        <option value="mumbai">Mumbai</option>
        <option value="bangalore">Bangalore</option>
        <option value="hyderabad">Hyderabad</option>
      </select>
    </div>
  );
}

export function TechStack({ techData }) {
  return (
    <div>
      <table border="2" align="center" cellPadding="10px">
        <thead>
          <tr style={{ color: "skyblue" }}>
            <th>Id</th>
            <th>Category</th>
            <th>Technologies</th>
          </tr>
        </thead>
        <tbody>
          {techData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.technologies.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Login;
