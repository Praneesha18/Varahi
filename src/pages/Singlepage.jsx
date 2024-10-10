import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Box } from '@chakra-ui/react'
const Singlepage = () => {
   const {id}=useParams()
  return (
   <>
  <Box >{id}</Box>
   </>
  )
}
export default Singlepage;
