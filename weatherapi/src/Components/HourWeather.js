import React from 'react'
import clear from '../Assets/clear.svg';
import './HourWeather.css'



function HourWeather() {
  return (
    <div className='hour-weather-div'>
      <p> 03:00</p>
      <img alt="weather-icon" src={clear} className="weather-icon-hour-div"/>
      <p> 17 <span>&#8451;</span></p>
    </div>
  )
}

export default HourWeather
