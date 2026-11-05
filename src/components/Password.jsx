import React, {useState} from 'react'

function Password() {
    const [password, setPassword] = useState("");
  return (
    <div>
        <input type="password" 
        value={password} onChange={(e) => setPassword(e.target.value)} />
         <p>Password length: {password.length}</p>
         <p>Password: {password.length < 6 ? "password is too weak" : "Acceptable"}</p>
    </div>
  )
}

export default Password