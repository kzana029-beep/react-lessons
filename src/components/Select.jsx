import React from "react";

function Select({ name, value, onChange }) {
  return (
    <div>
      <select name={name} value={value} onChange={onChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
    </div>
  );
}

export default Select;

//d.sh 1) te validohet forma me te gjithe inputs perfundri qdo inputi me shfaq erroirin
//2) te krijohet nje tabel saher krijohet nje student i ri
