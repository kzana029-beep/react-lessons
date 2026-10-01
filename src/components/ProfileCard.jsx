import React from "react";

function ProfileCard({ name, age, city }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{age}</h3>
      <p>{city}</p>
    </div>
  );
}

export default ProfileCard;
