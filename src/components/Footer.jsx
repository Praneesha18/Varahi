import React from "react";
import { Box, Text } from "@chakra-ui/react";
import theme from "../theme";
import { FaPhoneAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <Box
      w="100%"
      bg={theme.colors.thirty}
      fontFamily={theme.fonts.body}
      p={{ base: "20px", md: "30px", lg: "50px" }}
      color="white"
      maxH="500px"
      id="contact"
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap={{base:'20px',md:'50px'}}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-evenly"}
        flexDirection={{ base: "column", md: "row" }}
        w="100%"
        gap='20px'
      >
        <Box
          fontWeight={700}
          fontSize={"2rem"}
          color={theme.colors.ten}
          lineHeight={"1.7rem"}
        >
          VARAHI
          <br />
          PICKLES
        </Box>
        <Text
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          fontWeight={700}
          textAlign={"center"}
        >
          Crafted with passion, preserved with tradition.
          <br /> Varahi – Where every pickle tells a story.
        </Text>
        <Box
          fontWeight={600}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={'column'}
          gap="10px"
          cursor="pointer"
          fontSize={"1.2rem"}
          textAlign={'center'}
        >
          <Box display={'flex'} alignItems={'center'} justifyContent={'center'} gap='10px' textDecoration={'underline'}><FaPhoneAlt />Contact Us</Box>
          <Box>
            <a href="tel:+916302838259">6302838259</a>
            <br />
            <a href="tel:+917075315519">7075315519</a>
          </Box>
        </Box>
      </Box>
      <Box w="100%" textAlign={'center'}>"No added preservatives and artificial colors"</Box>
    </Box>
  );
};
export default Footer;
