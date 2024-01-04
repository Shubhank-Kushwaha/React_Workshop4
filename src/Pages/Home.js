import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate();
  const handleClick = ()=>
  {
   let id =12
    navigate(`/login/${id}`)
  }
  return (
    <div>
      <h1>Welcome Home</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default Home
