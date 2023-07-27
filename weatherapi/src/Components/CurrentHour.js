import React from 'react'
import './CurrentHour.css'
import cloudy from '../Assets/cloudy.svg';

function CurrentHour() {
  return (
    <div className='current-hour-div'>
     
      <img src={cloudy} alt="current-hour" className='current-hour-icon'/>
      <p className='current-hour-description'>overcast clouds</p>
      <div className='temp-humidity-desc-div'>
      <p className='temperature-desc-bold'>Temperature 30<span>&#8451;</span>. to 70<span>&#8451;</span></p>
      <p className='temperature-desc'>Humidity 78% Pressure 1008.48</p>
      </div>
    </div>
  )
}

export default CurrentHour
