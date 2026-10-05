import React from "react";
import Property from "./Property";

function Proportis({ size, isSold }) {
  const realEstate = [
    {
      id: 1,
      name: "banes",
      size: 100,
      isSold: true,
    },
    {
      id: 2,
      name: "banes",
      size: 200,
      isSold: false,
    },
    {
      id: 3,
      name: "banes",
      size: 300,
      isSold: true,
    },
  ];
  return (
    <div>
      {realEstate.map((property) => (
        <Property
          key={property.size}
          name={property.name}
          size={property.size}
          isSold={property.isSold}
        />
      ))}
    </div>
  );
}

export default Proportis;
