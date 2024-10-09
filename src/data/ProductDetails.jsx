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
        const Serverequest = await fetch(`https://raw.githubusercontent.com/Praneesha18/Varahi/refs/heads/master/src/Server/data.json`);
        const response=await Serverequest.json()
        setData((prev) => ({
          ...prev,
          pickles: response.pickles,
          podis: response.podis,
          cart: response.cart
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