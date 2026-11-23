import React, { useState } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

function EditUserFrom({user, onUpdate, onCancel}) {
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)

  return (
    <div className='form-card'>
        <h2>Edit User</h2>
         <Input placeholder="first name"
   value={name}
   onChange={(e)=> setName(e.target.value)}/>
   <Input placeholder="email"
   value={email}
   onChange={(e)=> setEmail(e.target.value)}/>
 <Button
  text="edit user"
  color="blue"
  onClick={() => onUpdate(name, email)}
/>
   <Button
  text=' cancel'
  color='orange'
  onClick={onCancel}
  
  />
    </div>
  )
}

export default EditUserFrom