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
import img1 from "../../assets/pickles/chickenbone.webp";
import img2 from "../../assets/pickles/chickenboneless.webp";
import img3 from "../../assets/pickles/chicken-keema.jpg";
import img4 from "../../assets/pickles/muttonbone.webp";
import img5 from "../../assets/pickles/muttonboneless.webp";
import img6 from "../../assets/pickles/prawns.webp";
import img7 from "../../assets/specialpickles/gongurachicken.webp";
import img8 from "../../assets/specialpickles/gonguramutton.webp";
import img9 from "../../assets/specialpickles/gonguraprawns.webp";
import img10 from "../../assets/podi/kandipodi.webp";
import img11 from "../../assets/podi/moringapodi.avif";
import img12 from "../../assets/podi/curryleavespodi.jpeg";
import img13 from "../../assets/podi/flaxseedspodi.jpg";
import img14 from "../../assets/podi/vellulikarampodi.jpg";
const Homesec3 = () => {
  const data = useContext(ContextProvider);
  const { pickles, podis, cart } = data;
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
  ];
  const message = encodeURIComponent("Hello, I am interested in your products!");
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
                    src={images[index]}
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

                  <Text color={theme.colors.thirty} fontSize={{base:'sm',md:'lg'}}>
                    {pickle.price["500g"]}/-(500gm)
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={theme.colors.ten}/>
              <CardFooter display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box
                    w={{base:'100%',md:'80%'}}
                  textAlign={"center"}
                  p="10px 10px"
                  bg={theme.colors.thirty}
                  color="white"
                  borderRadius={"15px"}
                  cursor={"pointer"}
                  onClick={() => window.open(`https://wa.me/9392356950?text=${message}`, "hello how are you")}
                >
                  Add to Cart
                </Box>
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
                    src={images[index+9]}
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

                  <Text color={theme.colors.thirty} fontSize={{base:'sm',md:'lg'}}>
                    {podi.price["100gm"]}/-(100gm)
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={theme.colors.ten}/>
              <CardFooter display='flex' alignItems={'center'} justifyContent={'center'}>
                <Box
                  w={{base:'100%',md:'80%'}}
                  textAlign={"center"}
                  p="10px 10px"
                  bg={theme.colors.thirty}
                  color="white"
                  borderRadius={"15px"}
                  cursor={"pointer"}
                >
                  Add to Cart
                </Box>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        </Box>
    </Box>
  );
};

export default Homesec3;
