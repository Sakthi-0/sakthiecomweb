import React from 'react'
import Todoapp from './components/Todoapp'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Product from './components/Product';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import NewComponent from './components/NewComponent';
import UpdateComp from './components/UpdateComp';
import WishList from './components/WishList';

function App() {

  let userName = "Sakthi"

  return (
    <div>

      <Router>

        <NavBar/>

        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/login/:userName' element={ <Login/> }/>
          <Route path='/sign-up' element = { <SignUp/> } />
          <Route path='/product' element = { <Product/> } >
            <Route index element = { <ProductList/> } />
            <Route path='list'  element = { <ProductList/> } />
            <Route path='details' element = { <ProductDetails/> } />
          </Route>
          <Route path='/todo' element = { <Todoapp/> } />
          <Route path='/newComp' element = { <NewComponent/> } />
          <Route path='/update/:id' element = { <UpdateComp/> } />
          <Route path='/wishlist' element = { <WishList/> } />
          <Route path='*' element={ <NotFound/> } ></Route>
        </Routes>
      </Router>

      
    </div>
  )
}

export default App;