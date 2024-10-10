import React from 'react'
import Carousel from '../components/Home/Carousel'
import { Box } from '@chakra-ui/react'
import Homesec2 from '../components/Home/Homesec2'
import Homesec3 from '../components/Home/Homesec3'
const Home = () => {
  return (
    <>
    <section id='home'><Carousel/></section>
    <section id='products'><Homesec3/></section>
    <section id='about'><Homesec2/></section>
    
   
    </>
  )
}

export default Home