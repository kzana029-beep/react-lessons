import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
     <main>
     <div className="container">
        <h1>Mirë se vini në dyqanin tonë Allora </h1>
      <p>Shfleto produktet dhe zbulo më shumë rreth tyre.</p>
      <Link to="/products" className="home-button">Shiko produktet</Link>
      </div>
    </main>
  )
}

export default Home