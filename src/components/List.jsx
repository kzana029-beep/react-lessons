import React from "react";

function List() {
  const students = ["zana", "hana", "egzon"];
  return (
    <div>
      <h1>This is the list of my students</h1>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
