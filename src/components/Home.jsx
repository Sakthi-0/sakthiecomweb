import React from 'react'
import useFetch from './custom hook/useFetch'

function Home() {

  let {data} = useFetch("https://fakestoreapi.com/products")

  return (
    <div>
      <h1> Home - Total Products : { data.length } </h1>
      
    </div>
  )
}

export default Home