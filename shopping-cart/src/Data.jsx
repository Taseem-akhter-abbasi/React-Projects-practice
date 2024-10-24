import React, { useState } from 'react';
import { Box, Button, Image, Heading, Text, VStack, HStack, Flex } from '@chakra-ui/react';
import shoesImage from './assets/shoes.jpeg';
import perfumeImage from './assets/perfume.jpeg';
import bagImage from './assets/bag.jpeg';
import bgimage from './assets/bg.jpeg'; // Import background image

const Data = () => {
    const products = [
        {
            id: 1,
            name: "Shoes",
            price: 59.99,
            image: shoesImage
        },
        {
            id: 3,
            name: "Perfume",
            price: 39.99,
            image: perfumeImage
        },
        {
            id: 4,
            name: "Bag",
            price: 79.99,
            image: bagImage
        }
    ];

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        console.log(`Added ${product.name} to cart!`);
    };

    const handleRemoveFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    return (
        <Box
            backgroundImage={`url(${bgimage})`} // Set background image
            backgroundSize="cover" // Make it cover the entire area
            backgroundPosition="center" // Center the background image
            backgroundRepeat="no-repeat" // Prevent repeating
            minH="100vh" // Ensure it covers the full viewport height
        >
            <Flex
                direction="column"
                align="center"
                justify="center"
                color="white"
                padding={4}
                overflow="hidden" // Prevent scrolling
            >
                <Heading as="h1" size="lg" textAlign="center" my={4} color="black" backgroundColor="skyBlue" display="inline-block">
                    OUR PRODUCTS
                    <hr />
                </Heading>
                <HStack spacing={4} wrap="wrap" justify="center">
                    {products.map(product => (
                        <Box
                            key={product.id}
                            borderWidth="2px"
                            borderColor="green.500"
                            borderRadius="lg"
                            padding={4}
                            width={{ base: '100%', sm: '200px' }}
                            backgroundColor="pink"
                            boxShadow="md"
                        >
                            <Image src={product.image} alt={product.name} borderRadius="lg" />
                            {/* Set product name color to black */}
                            <Text fontWeight="bold" color="black">{product.name}</Text>
                            {/* Set product price color to black */}
                            <Text color="black">Price: ${product.price.toFixed(2)}</Text>
                            <Button mt={2} colorScheme="teal" onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </Button>
                        </Box>
                    ))}
                </HStack>

                <Heading as="h2" size="md" my={4} color='black'>
                    Your Cart
                </Heading>
                <Box borderWidth="2px" borderColor="blue.500" padding={4} backgroundColor="lightgray" width="full" maxW="500px" mx="auto">
                    {cart.length === 0 ? (
                        // Set "Your cart is empty" text color to black
                        <Text color="black">Your cart is empty.</Text>
                    ) : (
                        <>
                            <VStack spacing={2} align="stretch">
                                {cart.map((item, index) => (
                                    <HStack key={index} justify="space-between" borderWidth="1px" borderRadius="md" padding={2} backgroundColor="black">
                                        <HStack>
                                            <Image src={item.image} alt={item.name} boxSize="50px" borderRadius="md" />
                                            <Text>{item.name} - ${item.price.toFixed(2)}</Text>
                                        </HStack>
                                        <Button colorScheme="red" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
                                    </HStack>
                                ))}
                            </VStack>
                            {/* Make Total Price bold and black */}
                            <Text fontWeight="bold" color="black" mt={2}>
                                Total Price: ${totalPrice.toFixed(2)}
                            </Text>
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    );
};

export default Data;
