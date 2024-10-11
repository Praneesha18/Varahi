import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  Box,
  HStack,
  Image,
  Select,
  SelectField,
  Text,
} from "@chakra-ui/react";
import { ContextProvider } from "../data/ProductDetails";
import theme from "../theme";
import { FaChevronDown } from "react-icons/fa";
const Singlepage = () => {
  const { pickles, podis } = useContext(ContextProvider);
  const { subcategory, id } = useParams();
  let category = subcategory === "pickles" ? pickles : podis;
  const mainproduct = category.filter(
    (element) => element.id === parseInt(id, 10)
  );
  const [data,setdata]=useState([])
  const [selectWeight,setSelectedWeight]=useState("")  
 const [quantity,setQuantity]=useState(1)
 const [price,setPrice]=useState(0)
 let message=''
 useEffect(()=>{
  const  Weightselection=()=>{
  mainproduct?.forEach((item)=>{
    
     
      if(subcategory === 'pickles'){
        if(item.weight['250g'] !== 'NA'){
          setSelectedWeight('250g')
          setPrice(item.price['250g'])
        }else if(item.weight['250g']==='NA' && item.weight['500g'] !== 'NA'){
          setSelectedWeight('500g')
          setPrice(item.price['500g'])
        }else{
          setSelectedWeight('1kg')
          setPrice(item.price['1kg'])
        }
      }
      if(subcategory === 'podis'){
        setSelectedWeight('100g')
        setPrice(item.price['100g'])
      }
    } )
  }
  Weightselection()
 },[])

const handleOrder =(item)=>{
  const details={
 item,
 quantity,
 selectWeight,
 price:item.price[selectWeight]*quantity,

  }
  message=`Placing order for item : ${item.name} (${item.weight[selectWeight]}) x ${quantity}. Order Total : ${price} + Shipping charges as applicable.`
  const whatsappMessage = `https://api.whatsapp.com/send?phone=919392356950&text=${encodeURIComponent(
    message
  )}`;
  window.open(whatsappMessage, '_blank');
 setdata(details)

 
}

  return (
    <>
    
      <Box
        w="95%"
        maxW={"1200px"}
        mx="auto"
        fontFamily={theme.fonts.body}
        boxShadow={"md"}
        my={10}
      >
        <Box
          w="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          gap='20px'
          p={{base:5,md:10}}
        >
          {mainproduct.map((item,index) => (
            <>
            <React.Fragment key={item.id}>
              <Box
                w="100%"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
                flexDirection={{base:'column',md:'row'}}
                gap={{base:'10px',md:'2%'}}
                
              >
                <Box w={{base:'100%',md:'50%'}} h={{base:'300px',md:'400px'}} >
                  <Image src={item.image} w="100%" h="100%" objectFit={'cover'}/>
                </Box>
                <Box
                  w={{base:'100%',md:'48%'}}
                  display="flex"
                  justifyContent={"flex-start"}
                  flexDirection={"column"}
                  gap='10px'
                >
                  <Text fontSize={{ base: "1.5rem", md: "2rem" }} >
                    {item.name}
                  </Text>
                  <Text fontSize={{ base: "1.2rem", md: "2rem" }} >
                    {item.price[selectWeight]*quantity}/-<Box as='span' fontSize={'1rem'} ml='5px'>({item.weight[selectWeight]})</Box>
                  </Text>
                  <Box
                    display={"flex"}
                    justifyContent={"flex-start"}
                    flexDirection={"column"}
                    gap="10px"
                    w="100%"
                  >
                    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} w='100%' gap='2%'>
                      
                    <Select  w='65%' onChange={(event)=>setSelectedWeight(event.target.value)} cursor='pointer'>
                        {
                        subcategory === "pickles" && <>
                        {item.weight['250g'] !== "NA" ?<option value='250g'>{item.weight['250g']}</option>:'none'}
                        {item.weight['500g'] !== "NA" ?<option value='500g'>{item.weight['500g']}</option>:'none'}
                        {item.weight['1kg'] !== "NA" ?<option value='1kg'>{item.weight['1kg']}</option>:'none'}
                        </>
                        }

                        {
                        subcategory === "podis" && 
                        <>
                        <option value='100g'onChange={(e)=>setSelectedWeight(e.target.value)} >100gms</option>
                        <option value='250g' onChange={(e)=>setSelectedWeight(e.target.value)}>250gms</option>
                        </>
                        }

                        
                      

                    </Select>
                    
                      <HStack  w='33%'  color='gray' fontSize={'1.5rem'}  bg={'#Ededed'} borderRadius={'8px'} align={'center'} spacing='10px' textAlign={'center'}>
                       <Box flex='1' borderRight={'2px solid white'} cursor='pointer' onClick={()=>{setQuantity(prev=>prev+1)}}>+</Box>
                       <Box flex='1'  color='black'>{quantity}</Box>
                       <Box flex='1' borderLeft={'2px solid white'} cursor='pointer' onClick={()=>setQuantity(prev=>prev === 1? 1:prev-1)}>-</Box>
                      </HStack>

                    </Box>
                    <Box w={{base:'100%',md:'80%'}} cursor='pointer' p='8px' borderRadius={'8px'} border={`2px solid ${theme.colors.thirty}`} textAlign={'center'} fontSize={'0.9rem'} letterSpacing={'2px'}>ADD TO CART</Box>
                    <Box w={{base:'100%',md:'80%'}} cursor='pointer' p='8px' borderRadius={'8px'} bg={theme.colors.thirty} textAlign={'center'} fontSize={'0.9rem'} color='white' letterSpacing={'2px'} onClick={()=>handleOrder(item)}>PLACE ORDER</Box>
                  </Box>
                </Box>
              </Box>
              <Box w={{base:'100%',md:'100%'}} display={'flex'} justifyContent={'flex-start'} flexDirection={'column'} gap='10px'>
                <Text fontWeight={'600'}>Product Description</Text>
                <Text fontSize={'0.9rem'}>{item.description}</Text></Box>
                </React.Fragment>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
};
export default Singlepage;

