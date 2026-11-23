import React from 'react'
import Button from '../common/Button'

function UserCard({user, onEdit, onDelete}) {
  return (
   <div className='user-card'>
  <div>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
  </div>
 <div>
    <Button
    text="edit"
    color='blue'
    onClick={()=> onEdit(user)}
     />
      <Button
    text="delete"
    color='red'
    onClick={()=> onDelete(user)}
     />
 </div>
   </div>
  )
}

export default UserCard