import { Box, Button, Img, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const Banner = () => {
    const {products} = useSelector((state) => state.products)

    return (
        <>
            <Box background={"#F2F0F1"}>
                <Box
                    display={"flex"}
                    flexDirection={{base: 'column', lg:'row'}}
                    width={"90%"}
                    alignItems={"center"}
                    marginX={"auto"}
                    padding={'30px 10px'}
                >
                    <Box
                        width={{md:'100%', lg:'60%'}}
                        display={"flex"}
                        flexDirection={"column"}
                        justifyContent={"flex-start"}
                        alignItems={"flex-start"}
                        padding={'30px 0px'}
                    >
                        <Text
                            textColor={"#222"}
                            fontSize={{base:"34px", md:'64px'}}
                            lineHeight={{base:'54px', md:"64px"}}
                            fontWeight={"700"}
                        >
                            FIND CLOTHES THAT MATCHES YOUR STYLE
                        </Text>
                        <Text textColor={"#00000099"} marginTop={"10px"}>
                            Browse through our diverse range of meticulously
                            crafted garments, designed to bring out your
                            individuality and cater to your sense of style.
                        </Text>
                    </Box>
                    <Box width={{base:'100%', md:'40%'}}>
                        <Img width={"100%"} height={"100%"} src="https://img.freepik.com/premium-photo/happy-handsome-man-with-shopping-bags-white-background_252847-13288.jpg" />
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Banner;
