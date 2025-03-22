import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function Login() {

  let {userName} = useParams()

  let navigate = useNavigate()

  let handleNavigate = () =>{
    navigate( "/" )
  }

  return (
    <div>Login - { userName } 
    <button onClick={ handleNavigate } > Back to Home </button>
    </div>
  )
}

export default Login