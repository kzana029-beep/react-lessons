import React, {useState} from 'react'

function Movie({title, category, time, hall, price, available, style}) {
  const [selected, setSelected] = useState(false)
  return (
     <div className="movie-card">
      <div className={`movie-poster ${style}`}>
       <span className="category">
        {category} 
       </span>
       <h2>{title}</h2>
      </div>
      <div className="movie-content">
        <div className="movie-details">
          <p>{time} . {hall}</p>
          <h3>${price.toFixed(2)}</h3>
      
        <p>{price.toFixed(2) < 6 ? `cheap ` : `expensive `}</p>
        <span className ={`availability ${available ? "availability available" : "availability sold-out"}`}>
          {available ? "Available" : "Sold out"}
        </span>
     </div>
     {
      available ? (
        <button className={selected ? "watch-button selected" : "watch-button"} onClick={() => setSelected(!selected)}>
          {selected ? "Selected" : "Watch"}
        </button>
      ) : (
        <button className="disabled-button" disabled>
         Not available
        </button>
      )
     }
      </div>
       </div>
     
  )
}

export default Movie