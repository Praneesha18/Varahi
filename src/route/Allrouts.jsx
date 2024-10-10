import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart"
import Singlepage from "../pages/Singlepage";

const Allrouts = () => {
    return(
        <>
      
           <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/singlepage/:subcategory/:id' element={<Singlepage/>}/>
            </Routes>
      
        </>
    )
    
}
export default Allrouts;