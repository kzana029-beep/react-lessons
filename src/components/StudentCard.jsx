import React from "react";
import StudentList from "./StudentList";

function StudentCard() {
  return (
    <div>
      <StudentList
        title="Student Name"
        color="Blue"
        course="Math"
        position="1st"
        grade="A"
        progress="85"
      />

      <StudentList
        title="Student Name"
        color="Red"
        course="Science"
        position="2nd"
        grade="B"
        progress="75"
      />
      <StudentList
        title="Student Name"
        color="Red"
        course="Science"
        position="2nd"
        grade="C"
        progress="65"
      />
      <StudentList
        title="Student Name"
        color="Red"
        course="Science"
        position="2nd"
        grade="D"
        progress="55"
      />
    </div>
  );
}

export default StudentCard;
