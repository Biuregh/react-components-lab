import React from 'react';
import WeatherData from '../WeatherData/WeatherData';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import "./WeatherForecast.css"

const WeatherForecast = ({ day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData dsy={day} conditions={conditions} time={time} />
        </div>

    )
}

export default WeatherForecast;