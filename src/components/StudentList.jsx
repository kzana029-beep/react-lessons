import React, { useState } from "react";

function StudentList({ title, color, course, position, grade, progress }) {
  const [absent, setAbsent] = useState(false);

  return (
    <div className="student-card">
      <div className="student-header">
        <div className="avatar">{title.charAt(0)}</div>

        <div>
          <h2>{title}</h2>
          <p>{course}</p>
        </div>

        <span className={`status ${absent ? "absent" : "present"}`}>
          {absent ? "Absent" : "Present"}
        </span>
      </div>

      <div className="student-info">
        <div className="info-box">
          <p>Color</p>
          <h3>{color}</h3>
        </div>

        <div className="info-box">
          <p>Position</p>
          <h3>{position}</h3>
        </div>

        <div className="info-box">
          <p>Grade</p>
          <h3 className={grade >= 5 ? "passed" : "failed"}>{grade}</h3>
        </div>
      </div>

      <div className="info-box">
        <p>Progress</p>
        <h3>{progress}%</h3>
      </div>

      <button className="attendance-button" onClick={() => setAbsent(!absent)}>
        Mark as {absent ? "Present" : "Absent"}
      </button>
    </div>
  );
}

export default StudentList;
