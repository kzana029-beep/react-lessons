import React, {useState} from 'react'

function CheckBox() {
    const [accept, setAccept] = useState(false)
  return (
    <div>
        <input
          type="checkbox"
          checked={accept}
          onChange={(e) => setAccept(e.target.checked)}
        />
        <p>{accept ? "Accepted" : "Not accepted"}</p>
     
    </div>
  )
}

export default CheckBox