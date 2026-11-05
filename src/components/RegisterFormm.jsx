import React from "react";
import Inputt from "./Inputt";
import Title from "./Title";
import Butoni from "./Butoni";
import { useState } from "react";


function RegisterFormm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <div>
      <Title />
      <form action="" onSubmit={handleSubmit}>
        <Inputt type="text" placeholder="first name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
        <Inputt type="text" placeholder="last name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
        <Inputt type="number" placeholder="age" value={age} onChange={(e) => {setAge(e.target.value)}} />
        <Inputt type="email" placeholder="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
        <Inputt type="password" placeholder="password" value={password} onChange={(e) => {setPassword(e.target.value)}} />
        
      </form>
     <Butoni type="submit" onClick={handleSubmit}/>
    </div>
  );
}

export default RegisterFormm;
