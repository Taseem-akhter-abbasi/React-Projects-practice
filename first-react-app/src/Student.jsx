import React from 'react'

function Student(props) {
    const styles = {
        display: "flex",
        height: "100px",
        width: "70px",
        padding: "20px",
        border: "3px solid grey",
        textAlign: "center",            // Use camelCase for text-align
        borderRadius: "10%"


    };
  return (
    <p style={styles}>name: {props.name} age: {props.age} student: {props.istudent ? "yes":"no"}</p>
  )
}

export default Student;