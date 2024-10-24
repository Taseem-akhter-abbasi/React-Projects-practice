import React, { useState } from 'react';

const Colorswitcher = () => {
    const [color, setColor] = useState('');

    const changeColor = (e) => {
        const selectedColor = e.target.value;
        setColor(selectedColor);
        document.body.style.backgroundColor = selectedColor;
    };

    return (
        <>
            <select value={color} onChange={changeColor}>
                <option value="">Select a color</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
            </select>
        </>
    );
};

export default Colorswitcher;
