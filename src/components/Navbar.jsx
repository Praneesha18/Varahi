import React, { useState, useEffect, useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  Box,
  Image,
  IconButton,
  VStack,
  HStack,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Flex,
} from "@chakra-ui/react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import theme from "../theme";
import logo from "../assets/varahi.png"; 
import { ContextProvider } from "../data/ProductDetails";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const data=useContext(ContextProvider)
  const cartitems=data.cart.length
  console.log(data)
  const [isNavOpen, setIsNavOpen] = useState(false); 
  const [isScrolled, setIsScrolled] = useState(false); 


  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

 
  const handleScroll = () => {
    const scrollTop = window.scrollY; 
    setIsScrolled(scrollTop > 0);
  };


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const message='Hi, I’m interested in your products. Can you share more details?'

  return (
    <>
      {/* Navbar Container */}
      <Box
        boxShadow="md"
        bg="white"
        position={isScrolled ? "fixed" : "static"} 
        w="100%"
        top="0"
        zIndex="10"
        transition="position 0.3s ease-in-out"
      >
        {/* Mobile & Desktop Flex Container */}
        <HStack
          fontFamily={theme.fonts.body}
          w="95%"
          maxW="1200px"
          mx="auto"
          h="70px"
          p={1}
          display="flex"
          justifyContent={{ base: "space-between", lg: "space-between" }}
          alignItems="center"
          flexDirection={{ base: "row", lg: "row" }}
        >
          {/* Mobile View: Menu Toggle, Logo, Chat Button */}
          <HStack
            display={{ base: "flex", lg: "none" }}
            w="full"
            justifyContent="space-between"
            alignItems="center"
          >
            <HStack>
              {/* Hamburger Icon for Small Screens */}
              <IconButton
                icon={isNavOpen ? <IoMdClose /> : <IoMdMenu />}
                variant={'outline'}
                aria-label="Toggle navigation"
                fontSize="2rem"
                onClick={toggleNav}
                display={{ base: "block", lg: "none" }}
                mr="0px"
                borderRadius="6px"
               
              />

              {/* Logo */}
              <Box w="120px" h="35px" ml="5px">
                {/* Adjust logo size as needed */}
                <a href='/#home'>
                  <Image w="100%" h="100%" src={logo} alt="Logo" />
                </a>
              </Box>
            </HStack>

            {/* WhatsApp Button */}
        
            <Box
              w="max-content"
              borderRadius="30px"
              p={{base:'5px 10px'}}
              bg={theme.colors.ten}
              display={{ base: "flex", lg: "flex" }} // Show in both mobile and desktop
              alignItems="center"
              justifyContent="center"
              gap="5px"
              color='white'
              cursor="pointer" // Change cursor to pointer
              _hover={{
                backgroundColor: theme.colors.thirty,
                color: "white",
                transform: "scale(1.05)", // Slightly increase the size
                transition: "all 0.3s ease", // Smooth transition
              }}
              onClick={() => window.open(`https://wa.me/6302838259?text=${message}`, "_blank")}
              fontSize={{base:'0.9rem',md:'1rem'}}
            >
             <FaWhatsapp /> Chat now

            </Box>
            {/* cart */}
            <NavLink to='/cart'><Box position='relative' fontSize={'1.3rem '} mr='10px' color={theme.colors.thirty}><FiShoppingCart/><Box position='absolute' w='20px' h='20px' top='-10px' right='-10px' bg={theme.colors.thirty}fontWeight={'700'} fontSize={'1rem'} color='white' display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} border={`2px solid white` }>{cartitems}</Box></Box></NavLink>
         
          </HStack>

          {/* Desktop View */}
          <Box
            display={{ base: "none", lg: "flex" }}
            w="full"
            justifyContent="space-between"
          >
            {/* Logo for Desktop */}
            <Box w="15%" h="100%">
              <a href='/#home'>
                <Image w="100%" h="100%" src={logo} alt="Logo" />
              </a>
            </Box>

            {/* Desktop Navigation Links */}
            <Box
              w="40%"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              fontWeight="700"
              textTransform="uppercase"
            >
              <a href='/#home' >
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </a>
              <a href="/#about" >
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </a>
              <a href="/#products" >
                <Box _hover={{ cursor: "pointer" }}>Products</Box>
              </a>
              <a href="/#contact" >
                <Box _hover={{ cursor: "pointer" }}>ContactUs</Box>
              </a>
            </Box>

            {/* WhatsApp Button for Desktop */}
            <Box
              w="20%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="20px"
            >
              <Box
                w="max-content"
                borderRadius="30px"
                p="5px 15px"
                bg={theme.colors.ten}
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap="5px"
                color='white'
                cursor='pointer'
                _hover={{
                  backgroundColor: theme.colors.thirty,
                  color:'white'
                 
                }}
                onClick={() => window.open(`https://wa.me/6302838259?text=${message}`, "_blank")}
              >
                <FaWhatsapp /> Chat Now
              </Box>
              {/* cart */}
              <NavLink to='/cart'><Box position='relative' fontSize={'1.3rem '} mr='10px' color={theme.colors.thirty}><FiShoppingCart/><Box position='absolute' w='20px' h='20px' top='-10px' right='-10px' bg={theme.colors.thirty}fontWeight={'700'} fontSize={'1rem'} color='white' display={'flex'} alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} border={`2px solid white` }>{cartitems}</Box></Box></NavLink>
            </Box>
          </Box>
        </HStack>

        {/* Drawer Menu for Mobile */}
        <Drawer isOpen={isNavOpen} placement="left" onClose={toggleNav}>
          <DrawerOverlay />
          <DrawerContent bg="#fff">
            <DrawerHeader>
              {/* Flexbox to align logo and close button in a row */}
              <Flex
                justifyContent="space-between"
                alignItems="center"
                w="100%"
                p="10px"
              >
                <Box
                  w={{ base: "50%", md: "30%", lg: "15%" }}
                  h={{ base: "100%", md: "80%" }}
                  ml="0px"
                >
                  <a href="/#home">
                    <Image w="100%" h="100%" src={logo} alt="Logo" />
                  </a>
                </Box>
                <DrawerCloseButton position="static" />{" "}
                {/* Remove absolute positioning */}
              </Flex>
            </DrawerHeader>

            <DrawerBody>
              {/* Collapsible Menu for Mobile */}
              <VStack
                spacing={4}
                alignItems="flex-start"
                textAlign="left"
                fontWeight="700"
                textTransform="uppercase"
                w="full"
                p={4}
              >
                <a href="/#home"   onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>Home</Box>
              </a>
              <a href="/#about"   onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>About Us</Box>
              </a>
              <a href="/#products"   onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>Products</Box>
              </a>
              <a href="/#contact"   onClick={toggleNav}>
                <Box _hover={{ cursor: "pointer" }}>ContactUs</Box>
              </a>
                
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
