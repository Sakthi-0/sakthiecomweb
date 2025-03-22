import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name : "cart",
    initialState : [],
    reducers : {
        addItem( state, action ){
            console.log( action.payload )

            state.push( action.payload )
        },
        removeItem( state, action ){

            let id = action.payload

            let sortedItems = state.filter( ( prd ) =>{
                return prd.id !== id
            } )

            return sortedItems

        }
    }
} )

export default cartSlice.reducer

export let { addItem, removeItem } = cartSlice.actions