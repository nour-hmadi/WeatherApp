import "./App.css";
import CurrentHour from "./Components/CurrentHour";
import Header from "./Components/Header";
import HourWeather from "./Components/HourWeather";

function App() {
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

export default App;
