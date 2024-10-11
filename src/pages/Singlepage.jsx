import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Image, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";
import { ContextProvider } from "../data/ProductDetails";
import theme from "../theme";
import { IoChevronDownCircleOutline } from "react-icons/io5";
const Singlepage = () => {
  const { pickles, podis } = useContext(ContextProvider);
  const { subcategory, id } = useParams();
  let category = subcategory === "pickles" ? pickles : podis;
  console.log(category);
  const mainproduct = category.filter(
    (element) => element.id === parseInt(id, 10)
  )
  

  console.log(mainproduct);
  return (
    <>
      <Box
        w="95%"
        maxW={"1200px"}
        mx="auto"
        fontFamily={theme.fonts.body}
        boxShadow={"md"}
      >
        <Box
          w="100%"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
        >
          <Box
            w="100%"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box w="40%" h="300px">
              <Image src={mainproduct[0]?.image} w="100%" h="100%"  />
            </Box>
            <Box
              w="60%"
              display="flex"
              justifyContent={"flex-start"}
              gap="10px"
            >
              <Text fontSize={{ base: "1rem", md: "2rem" }}>
                {mainproduct.name}
              </Text>
              <Text fontSize={{ base: "1rem", md: "2rem" }}>
                {mainproduct.price}
              </Text>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-start"}
                flexDirection={"column"}
                gap="10px"
              >
                <Menu>
                  <MenuButton>
                    weight
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                     250gms
                    </MenuItem>
                    <MenuItem>
                      500gms
                    </MenuItem>
                    <MenuItem>
                      1kg
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default Singlepage;
