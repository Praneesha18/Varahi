import React, { useContext } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ContextProvider } from "../../data/ProductDetails";
import theme from "../../theme";
import { FaShoppingCart } from "react-icons/fa";
import Singlepage from "../../pages/Singlepage";
import { Link, NavLink } from "react-router-dom";
const Homesec3 = () => {
  const data = useContext(ContextProvider);
  const { pickles, podis, cart } = data;

  
  return (
    <Box
      w="95%"
      maxW={"1200px"}
      mx="auto"
      my={{ base: "2rem", md: "3rem", lg: "5rem" }}
      fontFamily={theme.fonts.body}
      textAlign={"center"}
    >
      <Text fontSize={{ base: "1.5rem", md: "2.5rem" }}>
        Our Signature Products
      </Text>
      <Text color={theme.colors.ten} fontSize={{ base: "1rem", md: "1.5rem" }}>
        Savor the Essence of Homemade Goodness.
      </Text>
      <Box w="100%" p={5}>
        <Box fontSize={{base:'1rem',md:'2rem'}} textAlign={'left'} mb={{base:'5px',md:'10px'}} ml='10px'>Pickles</Box>
        <SimpleGrid columns={{ base: "2", md: "2", lg: "4" }} spacing={{base:2,md:10}}>
          {pickles.map((pickle, index) => (
            <Card maxW="sm" key={index} _hover={{transform:'scale(1.03)',cursor:'pointer',transition:'all 0.5s ease'}}>
              <CardBody>
                <Box w="100%" h={{base:'100px',md:'200px'}}>
                  <Image
                    src={pickle.image}
                    alt={pickle.name}
                    borderRadius="lg"
                    w='100%'
                    h='100%'
                  />
                </Box>
                <Stack mt="6" spacing="3">
                  <Heading size={{base:'sm',md:'md'}} color={theme.colors.ten}>
                    {pickle.name}
                  </Heading>

                  <Text color={theme.colors.thirty} fontSize={{base:'sm',md:'md'}}>
                    {pickle.price['250g']==='not available'?'not available':`${pickle.price["250g"]}/-`}(250gm)<br/>
                    {pickle.price['500g']==='not available'?'not available':`${pickle.price["500g"]}/-`}(500gm)<br/>
                    {pickle.price['1kg']==='not available'?'not available':`${pickle.price["1kg"]}/-`}(1kg)<br/>
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={theme.colors.ten}/>
              <CardFooter display='flex' alignItems={'center'} justifyContent={'center'}>
                <Link to={`./singlepage/pickles/${pickle.id}`}  w={{base:'100%',md:'800%'}} >
                <Box
                  w='100%'
                  textAlign={"center"}
                   p="10px 15px"
                  bg={theme.colors.thirty}
                  color="white"
                  borderRadius={"15px"}
                  cursor={"pointer"}
                 
                
                >
                  View more
                </Box>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Box w="100%" p={5}>
      <Box fontSize={{base:'1rem',md:'2rem'}} textAlign={'left'} mb={{base:'5px',md:'10px'}} ml='10px'>Podis</Box>
        <SimpleGrid columns={{ base: "2", md: "2", lg: "4" }} spacing={{base:2,md:10}}>
          {podis.map((podi, index) => (
            <Card maxW="sm" key={index} _hover={{transform:'scale(1.03)',cursor:'pointer',transition:'all 0.5s ease'}}>
              <CardBody>
                <Box w="100%" h={{base:'100px',md:'200px'}}>
                  <Image
                    src="/images/pickles/chickenbone.webp"
                    alt={podi.name}
                    borderRadius="lg"
                    w='100%'
                    h='100%'
                  />
                </Box>
                <Stack mt="6" spacing="3">
                  <Heading size={{base:'sm',md:'md'}} color={theme.colors.ten}>
                    {podi.name}
                  </Heading>

                  <Text color={theme.colors.thirty} fontSize={{base:'sm',md:'md'}}>
                    {podi.price["100g"]}/-(100gm)<br/>
                    {podi.price["250g"]}/-(250gm)
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={theme.colors.ten}/>
              <CardFooter display='flex' alignItems={'center'} justifyContent={'center'}>
              <Link to={`./singlepage/podis/${podi.id}`}  w={{base:'100%',md:'800%'}} >
                <Box
                  w='100%'
                  textAlign={"center"}
                  p="10px 10px"
                  bg={theme.colors.thirty}
                  color="white"
                  borderRadius={"15px"}
                  cursor={"pointer"}
                >
                  View more
                </Box>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        </Box>
    </Box>
  );
};

export default Homesec3;
