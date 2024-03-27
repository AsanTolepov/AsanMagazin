import { Box, Button, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { setSelectCategories } from "../../slice/Product.Slice";

const VewAllProducts = () => {
    const { products, selectCategories } = useSelector((state) => state.products);
    const {categories} = useSelector(state => state.categories)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectCategories(products));
    }, []);
    return (
        <>
            <Box
                width={"90%"}
                marginX={"auto"}
                display={"flex"}
                marginTop={"40px"}
                flexDirection={"column"}
                // justifyContent={"center"}
                alignItems={"center"}
            >
                <Heading
                    display={"block"}
                    textAlign={"center"}
                    marginTop={"25px"}
                >
                    All goods
                </Heading>
                <Box display={"flex"} marginTop={'30px'} width={'100%'}>
                    <ul className="flex items-center px-[10px] gap-[30px] w-[100%] overflow-x-auto">
                        <li className="bg-[dodgerblue] flex items-center flex-nowrap text-[#fff] p-[10px] rounded-[5px] cursor-pointer" 
                            onClick={() => {
                                dispatch(setSelectCategories(products))
                            }}
                        >
                            All products
                        </li>
                        {
                            categories?.map(item => (
                                <li key={item.id} className="bg-[dodgerblue] text-[#fff] p-[10px] rounded-[5px] cursor-pointer"
                                    onClick={() => {
                                        console.log(selectCategories)
                                        dispatch(setSelectCategories(products.filter(element => +element.categoryId === +item.id)))
                                    }}

                                >
                                    {item.title}
                                </li>
                            ))
                        }
                    </ul>
                </Box>
                <Box
                    display={"grid"}
                    // display={'flex'}
                    width={"100%"}
                    // overflowX={'auto'}
                    gridTemplateColumns={"repeat(auto-fit, minmax(200px, 1fr))"}
                    // alignItems={'center'}
                    gap={"10px"}
                    marginTop={"20px"}
                >
                    { selectCategories.length >0 ? selectCategories?.map((element) => (
                        <CardComponent key={element.id} element={element} />
                    )) : 
                    products?.map((element) => (
                        <CardComponent key={element.id} element={element} />
                    ))  
                    }
                </Box>
            </Box>
        </>
    );
};

export default VewAllProducts;
