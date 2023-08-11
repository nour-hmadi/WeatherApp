import React from "react";
import CurrentHour from "../Components/CurrentHour";
import Header from "../Components/Header";
import HourWeather from "../Components/HourWeather";
import './Home.css'

function Home() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <CurrentHour />
        <div className="hour-array">
          <HourWeather />
          <HourWeather />
          <HourWeather />
          <HourWeather />
          <HourWeather />
          <HourWeather />
          <HourWeather />
        </div>
      </div>
    </div>
  );
}

export default Home;
