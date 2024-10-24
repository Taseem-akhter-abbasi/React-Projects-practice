import profilepic from './assets/profile.jpeg';
// import React from 'react'
// import './App.css'

function Card() {
    const styles = {
        height: "auto",                // Correct use of colon
        border: "3px solid grey",       // Correct border value
        margin: "10px",
        width: "350px",
        display: "inline-block",
        textAlign: "center",            // Use camelCase for text-align
        borderRadius: "10%",            // Use camelCase for border-radius
        boxShadow: "5px 5px 5px",       // Use camelCase for box-shadow
        backgroundColor: "lightgray"    // Use camelCase for background-color
    };

    return (
        <div style={styles}>
            <img id='image' src={profilepic} alt="profile pic" />
            <h1>Jugnoo</h1>
            <h2>YouTube Channel</h2>
        </div>
    );
}

export default Card;
