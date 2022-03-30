import React from 'react';
import ExtractDate from '../helpers/ExtractDate';
import TemperatureWrapper from '../helpers/TemperatureWrapper';


function CurrentWeather({ data }) {

    const currentDate = ExtractDate(data, 0);
    const rawTemp = Math.round(data.list[0].main.temp);
    const currentTemperature = TemperatureWrapper(rawTemp);
    const weatherCondition = data.list[0].weather[0].main;

    return(
        <div className="current-weather-component">
            <div className="date-time">
                <span className="date">{currentDate}</span> 
                <span className="time">  00:00:00</span>
            </div>
            <div className="city">
                {data.city.name}
            </div>
            <div className="weather-condition">
                <img 
                src={require(`../images/${weatherCondition}.png`)} alt={weatherCondition}
                height="50"
                width="50"/>
            </div>
            <div className="current-temperature">
            {currentTemperature}°C
            </div>
        </div>
    )
}

export default CurrentWeather;