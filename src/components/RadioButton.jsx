import React, {useState}from 'react'

function RadioButton() {
    const [select, setSelect] = useState("")
  return (
    <div>
        <input type="radio" 
        name="gender" value="male" 
        checked={select === "male"} 
        onChange={(e) => setSelect(e.target.value)} /> Male
       <input type="radio"
       name='gender' value="female"
       checked ={select === "female"}
       onChange={(e) => setSelect(e.target.value)} /> Female
    </div>
  )
}

export default RadioButton