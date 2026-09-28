import React from "react";

const technologies = ["react", "html", "js"];
const students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
];
function App() {
  return (
    <div>
      {technologies.map((technology) => (
        <p key={technology}>{technology}</p>
      ))}
      {students.map((student) => (
        <h1 key={student.id}>{student.name}</h1>
      ))}
    </div>
  );
}

export default App;
