import React from "react";
import { useEffect, useState } from "react";
import {Commet} from 'react-loading-indicators'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import useFetch from "./custom hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'
import { data } from "react-router-dom";
import { addItem } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const ProductList = () => {
  
  let navigate = useNavigate()

  let {data, error, isLoading,setData} = useFetch( "http://localhost:5000/products" )

  // useEffect(() => {
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       if ( response.ok ) {
          
  //         return response.json();
  //       }
  //       else{
  //         throw new Error( "Search Proper Data" )
  //       }
  //     })
  //     .then((res) => {
  //       setData(res);
  //     })
  //     .catch( ( error ) => { setError( error.message ) } )
  //     .finally( () => {
  //       setIsLoading( false )
  //     } )
  // }, []);

  function handleDelete( id ) {
    console.log( id )

    axios.delete( `http://localhost:5000/products/${id}` )
    .then( () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      });
    } )

    let sortedItem = data.filter( (data) => {
      return data.id !== id 
    } )

    setData( sortedItem )
  }

  let dispatch = useDispatch()

  let addItemToCart = ( product ) =>{
    dispatch( addItem( product ) )
  }

  if ( isLoading ) {
    return( 
      <div>
        <center>
          <Commet color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} size="medium" text="Loading" textColor='red' />
 
        </center>
      </div>
     )
  }
  else{

    return (
      <div>
        <h1> Product List </h1>

        <article>
          <span> To Create New Product  </span> <Button variant="primary" onClick={ () => { navigate( "/newComp" ) } } > Click me! </Button>
        </article>

        {
          data.length !== 0 && 
        <section className="products" >
        {data.map((list, index) => {
          
          return (
            <Card key={list.id} style={{ width: "18rem" }} className="product" >
              <center>
              <Card.Img variant="top" src={list.image} style={{ width: "9rem", height: "12rem" }} />
              </center>
              <Card.Body>
                <Card.Title> { list.title } </Card.Title>
                
                <Card.Text>
                  ${ list.price }
                </Card.Text>
              </Card.Body>
  
              <Card.Footer style={ { display: "flex", justifyContent: "space-evenly", alignItems: "center" } } >
              <Button variant="primary"> <MdAddShoppingCart onClick={ () => addItemToCart( list ) } /> </Button>
              <Button variant="secondary" onClick={ () => { navigate(`/update/${list.id}`) } }> <CiEdit /> </Button>
              <Button variant="danger" onClick={ () => { handleDelete( list.id ) } }> <MdDeleteForever /> </Button>
              </Card.Footer>
            </Card>
          );
        }
      )}
        </section>
        }
  
        {
          error && <p> { error } </p>
        }
      </div>
    );
  }

};

export default ProductList;
{/* <Mosaic color={["#33CCCC", "#33CC36", "#B8CC33", "#FCCA00"]} /> */}