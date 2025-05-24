const College = ({data}) => {
  return (
    <div>
      <h2 style={{ color: "skyblue", fontSize: "30px" }}>Nested college data</h2>
      {
        data.map((college, index) => (
          <div key={index}>
            <h2>Name: {college.name}</h2>
            <ul>
              <li>
                <h3 style={{ color: "lightgreen" }}>Location: {college.location}</h3>
              </li>
              <li>
                <h3 style={{ color: "orange" }}>Website: {college.website}</h3>
              </li>
              <li>
                <h3 style={{ color: "lightblue" }}>Students:</h3>
                <ul>
                  {
                    college.students.map((student, i) => (
                      <li key={i} style={{ color: "skyblue" }}>
                        Name: {student.name}, Age: {student.age}, Branch: {student.branch}
                      </li>
                    ))
                  }
                </ul>
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  );
};

export default College;
