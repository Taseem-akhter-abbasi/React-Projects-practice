import React from 'react'
import { useContext } from 'react'
import { data, data2 } from './App';

const Usecontext = () => {
    const firstname = useContext(data);
    const lastname = useContext(data2)
  return (
    <>
    <h1>my name is {firstname}</h1>
    <h2>and i am {lastname}</h2>
    </>
  )
}

export default Usecontext