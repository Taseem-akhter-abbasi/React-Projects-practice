import './App.css'
import Data from "./Data";
import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';






function App() {
  return(
    <>
    <ChakraProvider>
    <Data/>
    </ChakraProvider>
    </>
  )
  
}

export default App
