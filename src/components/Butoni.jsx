import React from 'react'

function Butoni({type, onClick}) {
  return (
    <div>
        <button type={type} onClick={onClick}>
          register here
        </button>
    </div>
  )
}

export default Butoni