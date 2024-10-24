import React, { useState } from 'react';
import axios from 'axios';

const WeatherSearch = () => {
    const [cityName, setCityName] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState('');
    const apiKey = '5ac73563970e0a918ce7456075ccd3d6';

    const handleSearch = async () => {
        if (!cityName.trim()) {
            alert('Please enter a city name first');
            return;
        }

        setLoading(true);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        try {
            const response = await axios.get(url);
            const data = response.data;
            const weatherInfo = `Weather in ${data.name}: ${data.weather[0].description}`;
            setResult(weatherInfo);
        } catch (error) {
            if (error.response) {
                alert('City not found');
            } else {
                alert('An error occurred while fetching data.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ margin: '50px' }}>
            <input
                type="text"
                id="cityname"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Enter city name"
            />
            <button id="btn" onClick={handleSearch}>Search</button>
            {loading && <div className="loader">Loading...</div>}
            <div className="display">{result}</div>
        </div>
    );
};

export default WeatherSearch;
