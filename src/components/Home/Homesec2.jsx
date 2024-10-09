import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
import image1 from '../../assets/aboutimg1.jpeg'
import image2 from '../../assets/aboutimg2.jpeg'
import theme from '../../theme'
const Homesec2 = () => {
  return (
    <Box w='95%' maxW={'1200px'} mx='auto' my={{base:'2rem',md:'3rem',lg:'5rem'}} fontFamily={theme.fonts.body} textAlign={'center'}>
        <Text fontSize={{base:'1.5rem',md:'2.5rem'}} >About Us</Text>
        <Text color={theme.colors.ten} fontSize={{base:'1rem',md:'1.5rem'}}>
Welcome to Varahi, where tradition meets taste!
</Text>
        <Box w='100%' display={'flex'} alignItems={'center'} justifyContent={'flex-start'} flexDirection={'column'} mt={5} gap='20px'>
            <Box w='90%' display={'flex'}  borderRadius={{base:'15px',md:'20px'}} boxShadow={'lg'} flexDirection={{base:'column',md:'row'}}
>
                <Box w={{base:'100%',md:'30%'}} h='250px' display={'flex'} alignItems={'center'} justifyContent={'center'}  borderTopRadius={{base:'15px',md:'none'}}   borderLeftRadius={{base:'none',md:'20px'}} ><Image w='100%' h='100%' src={image1} borderTopRadius={{base:'15px',md:'none'}} borderLeftRadius={{base:'none',md:'20px'}}  /></Box>
                <Box w={{base:'100%',md:'70%'}} padding={{base:'10px',md:'30px'}} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                    <Text fontSize={{base:'0.9rem',md:'1.1rem'}}><Box as='span' fontWeight={'700'} color={theme.colors.ten}>At Varahi</Box>, we are passionate about bringing authentic and handcrafted pickles straight from our kitchen to your table. Our story began with a deep love for preserving traditional recipes passed down through generations, ensuring every jar we make is packed with love, flavor, and purity.</Text>
                </Box>
            </Box>

            <Box w='90%' display={'flex'}  borderRadius={{base:'15px',md:'20px'}} boxShadow={'lg'}  flexDirection={{base:'column',md:'row'}} >
                <Box   order={{base:'1',md:'2'}} w={{base:'100%',md:'30%'}} h='250px' display={'flex'} alignItems={'center'} justifyContent={'center'} borderTopRadius={{base:'15px',md:'none'}}  borderRightRadius={{base:'none',md:'20px'}}  overflow={'hidden'}><Image w='100%' h='100%' src={image2}   borderTopRadius={{base:'15px',md:'none'}} borderRightRadius={{base:'none',md:'20px'}}  /></Box>
                <Box order={{base:'2',md:'1'}} w={{base:'100%',md:'70%'}} padding={{base:'10px',md:'30px'}} display={'flex'} alignItems={'center'} justifyContent={'center'} >
                    <Text fontSize={{base:'0.9rem',md:'1.1rem'}}><Box as='span' fontWeight={'700'} color={theme.colors.ten}>At Varahi</Box>, We believe in using only the finest, natural ingredients, locally sourced to create pickles that not only enhance your meals but also provide the richness of true homemade goodness. Our variety of pickles captures the essence of regional flavors, catering to every palate, whether you love spicy, tangy, or sweet flavors.</Text>
                </Box>
            </Box>

            <Box color={theme.colors.ten} fontWeight={'600'}  fontSize={'1.2rem'} mt='20px'><Text><Box as='span' color={theme.colors.thirty}>Join us,</Box> on a journey where every Varahi jar tells the story of family, heritage, and pickle making.</Text></Box>
        </Box>

    </Box>
  )
}

export default Homesec2