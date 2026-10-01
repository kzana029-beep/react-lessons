import React from "react";

function CourseCard({ title, instructor, duration, price }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{instructor}</p>
      <p>{duration}</p>
      <p>{price}</p>
    </div>
  );
}

export default CourseCard;
