import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return <div onClick={() => console.log('Hello!')}>
    home works 123
    <Link to="/list"> List </Link>
  </div>
}

export default Home
