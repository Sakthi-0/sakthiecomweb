import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDeleteForever } from "react-icons/md";
import { removeItem } from '../store/cartSlice';

const WishList = () => {

    let cartProducts = useSelector( ( state ) =>  state.cart )

    let dispatch = useDispatch()

    let handleDelete = ( id ) => {
        dispatch( removeItem( id ) )
    }

  return (
    <div>
        {
          cartProducts.length !== 0 ?
        <section className="products" >
        {cartProducts.map((list, index) => {
          
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
              <Button variant="danger" onClick={ () => { handleDelete( list.id ) } }> <MdDeleteForever /> </Button>
              </Card.Footer>
            </Card>
          );
        }
      )}
        </section> :
        <h1> Please Purchase Something </h1>
        }
  
    
    </div>
  )
}

export default WishList