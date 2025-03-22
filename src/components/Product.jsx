import React, { useEffect, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Product() {

  
  return (
    <div>

      <Link to='list' > List </Link>
      <Link to='details' > Details </Link>
      <Outlet/>
    </div>
  )
}

export default Product