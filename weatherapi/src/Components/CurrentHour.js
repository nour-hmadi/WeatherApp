import React from 'react'
import './CurrentHour.css'
import cloudy from '../Assets/cloudy.svg';

function CurrentHour(props) {
  return (
    <div className='current-hour-div'>
     
      <img src={cloudy} alt="current-hour" className='current-hour-icon'/>
      <h1 className='current-hour-description'>overcast clouds</h1>
      <div className='temp-humidity-desc-div'>
      <p className='temperature-desc-bold'>Temperature {props.temp}<span>&#8451;</span>. to 70<span>&#8451;</span></p>
      <p className='temperature-desc'>Humidity {props.humi}% Pressure {props.pres}mb</p>
      </div>
    </div>
  )
}

export default CurrentHour
