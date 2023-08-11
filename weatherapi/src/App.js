import "./App.css";
import WeatherData from "./Components/WeatherData";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //npm i react-router-dom
import Auth from "./Pages/Auth";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
    <Routes>
          <Route exact path="/" element={<Auth />} />
          <Route exact path="/home" element={<Home />} />





        </Routes>
       
       
     
      <WeatherData />
    </div>
    </BrowserRouter>
  );
}

export default App;
