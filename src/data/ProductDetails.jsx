import React, { useState } from 'react'
import { useContext,useEffect } from 'react'
export const ContextProvider=React.createContext()
const ProductDetails = ({children}) => {
  const init={
    pickles:[],
    podis:[],
    cart:[]
  }
   const [data,setData]=useState(init)
 useEffect(()=>{
    const fetchData = async () => {
      try{
        const picklesreq = await fetch(`http://localhost:8000/pickles`);
        const podireq=await fetch("http://localhost:8000/podis");
        const cartreq=await fetch("http://localhost:8000/cart")
        const picklesdata = await picklesreq.json();
        const podidata = await podireq.json();
        const cartdata = await cartreq.json();
        setData((prev) => ({
          ...prev,
          pickles: picklesdata,
          podis: podidata,
          cart: cartdata
        }));
      }
      catch(error){
        console.log('error in fetching data')
      }
        
    };

    fetchData();
 },[])
  return (
    <ContextProvider.Provider value={data}>{children}</ContextProvider.Provider>
  )
}

export default ProductDetails