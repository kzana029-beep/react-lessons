import React, { useState } from "react";

function StudentCard({ name, course }) {
  const [isPresent, setPresent] = useState(false);
  function HandleAttendance() {
    setPresent(!isPresent);
  }
  return (
    <div>
      <h3>{name}</h3>
      <p>{course}</p>
      <p>Status: {isPresent ? "Present" : "Absent"}</p>

      <button onClick={HandleAttendance}>
        {isPresent ? "Mark Absent" : "Mark Present"}
      </button>
    </div>
  );
}

export default StudentCard;
