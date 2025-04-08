import { useEffect, useState } from "react";
import "./App.css";
import Login, { Profile, Skills, TechStack } from "./User";
import Clock from "./Clock";

function App() {
  const img_path = "https://media2.dev.to/dynamic/image/width=1080,height=1080,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F096baapsqqt9fks0us99.png";

  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(false);
  const [counter, setCounter] = useState(0);
  const [prfname, setPrfname] = useState("");
  const [companyname, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [salary, setSalary] = useState("");
  const [num, setNum] = useState(0);
  const [color, setColor] = useState('skyblue');

  const userObj = {
    name: "zxcvbn",
    email: "zxcvbn@test.com",
    age: 34,
  };

  const techData = [
    { id: 1, category: "Backend", technologies: ["Python", "Django"] },
    { id: 2, category: "Database", technologies: ["MongoDB", "Postgres"] },
    { id: 3, category: "Frontend", technologies: ["React", "Javascript"] },
    { id: 4, category: "Cloud", technologies: ["AWS", "Azure"] }
  ];

  const handleFruit = () => {
    setFruit("Banana");
  };

  function callFunc() {
    console.log("Function called");
  }

  useEffect(() => {
    callFunc();
  }, [num]);

  return (
    <div>
      <h1>Welcome to learn react</h1>

      <input
        type="text"
        value={prfname}
        onChange={(event) => setPrfname(event.target.value)}
        placeholder="Enter your name"
      />
      <br /><br />

      <button onClick={() => {
        setDisplay(true);
        setCounter(prev => prev + 1);
      }}>
        Show profile
      </button>

      <h3>Profile views: {counter}</h3>

      {display && <Profile name={prfname} />}
      {display && <Login user={userObj} />}

      <form action="" method="get">
        <input
          type="text"
          value={companyname}
          onChange={(event) => setCompany(event.target.value)}
          placeholder="Enter company name"
        />
        <br /><br />

        <input
          type="text"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          placeholder="Current Role"
        />
        <br /><br />

        <input
          type="number"
          value={salary}
          onChange={(event) => setSalary(event.target.value)}
          placeholder="Expected Salary"
        />
        <br />

        <Skills />
        <br />

        <button>Submit</button>
      </form>

      <br />

      <img src={img_path} height="200" width="200" alt="Tech image" />
      <br />

      <h3>{fruit}</h3>

      <button onClick={() => {
        handleFruit();
        setDisplay(!display);
      }}>
        Change fruit
      </button>

      {display ? <h3>You have got a {fruit}</h3> : null}

      <button onClick={() => setNum(num + 1)}>
        Number {num}
      </button>
      <br />

      <h3>Techstack</h3>

      <TechStack techData={techData} />

      <Clock color={color} />

      <select onChange={(event) => setColor(event.target.value)}>
        <option value="white">White</option>
        <option value="green">Green</option>
        <option value="orange">Orange</option>
      </select>
    </div>
  );
}

export default App;
