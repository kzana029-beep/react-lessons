import React from "react";
import Inputt from "./Inputt";
import Title from "./Title";
import Butoni from "./Butoni";


function RegisterFormm({}) {
  return (
    <div>
      <Title />
      <form action="">
        <Inputt type="text" placeholder="first name" />
        <Inputt type="text" placeholder="last name" />
        <Inputt type="number" placeholder="age" />
        <Inputt type="email" placeholder="email" />
        <Inputt type="password" placeholder="password" />
      </form>
     <Butoni/>
    </div>
  );
}

export default RegisterFormm;
