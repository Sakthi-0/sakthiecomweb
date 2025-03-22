import React, { useEffect, useState } from "react";
import { Button, Grid2, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateComp = () => {
    let paperStyle = {
        margin: "20px auto",
        width: 400,
        padding: "20px",
      };
      // {
      //   "id": 1,
      //   "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      //   "price": 109.95,
      //   "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      //   "category": "men's clothing",
      //   "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      //   "rating": {
      //     "rate": 3.9,
      //     "count": 120
      //   }
      // }

      
      let [upadteProduct, setUpdateProduct] = useState( null );
      
      let {id} = useParams()

      let navigate = useNavigate()

    //   console.log( id )

      useEffect( () => {
        axios.get( `http://localhost:5000/products/${id}` )
        .then( res => setUpdateProduct( res.data ) )
      }, [] )
      function handlechange(e) {
    
        let {value, name} = e.target
    
        let fieldName = name.split("rating.")[1]
    
    
        if ( name.includes( "rating." ) ) {
          setUpdateProduct( {
            ...upadteProduct,
            rating : {
              ...upadteProduct.rating,
              [ fieldName ] : value
            }
          } )
        }
        else{
    
          setUpdateProduct({
            ...upadteProduct,
            [name] : value
          })
        }
      }
    
    //   console.log( newProduct )
    
      function handleAdd(e) {
        e.preventDefault()
    
        fetch( `http://localhost:5000/products/${id}`, {
          method : "PUT",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify( upadteProduct )
        } )
        .then( () => {
          alert( "Saved Successfully" )
          navigate("/product")
        } )
      }

      if ( upadteProduct !== null ) {
        
          return (
            <Paper elevation={20} style={paperStyle}>
              <Typography variant="h5" textAlign="center">
                Update Product
              </Typography>
              <Grid2 component="form" style={{ display: "grid", gap: "20px" }} onSubmit={handleAdd} >
                <TextField
                  value={upadteProduct.title}
                  name="title"
                  label="Title"
                  variant="outlined"
                  fullWidth
                  onChange={handlechange}
                />
                <TextField
                  value={upadteProduct.category}
                  name="category"
                  label="Category"
                  variant="outlined"
                  fullWidth
                  onChange={handlechange}
                />
                <Grid2 container spacing={2}>
                  <Grid2 size={6}>
                    <TextField
                      value={upadteProduct.rating.rate}
                      name="rating.rate"
                      type="number"
                      label="Rate"
                      variant="outlined"
                      onChange={handlechange}
                    />
                  </Grid2>
                  <Grid2 size={6}>
                    <TextField
                      value={upadteProduct.rating.count}
                      name="rating.count"
                      type="number"
                      label="Count"
                      variant="outlined"
                      onChange={handlechange}
                    />
                  </Grid2>
                </Grid2>
                <Button type="submit" variant="contained" color="success" fullWidth>
                  Save
                </Button>
              </Grid2>
            </Paper>
          );
      }
      else{
        <div> Loading.... </div>
      }
    
    
}

export default UpdateComp