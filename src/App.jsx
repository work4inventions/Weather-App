import { useEffect, useState } from "react";
import "./App.css";
import IndexCenter from "./COMPONENT/center-side-container/Index";
import Index from "./COMPONENT/left-side-container/Index";
import IndexRight from "./COMPONENT/right-side-container/Index";
import NavBar from "./Components/Header/NavBar";
import getFormattedWeatherData from "./services/weatherservices";

function App() {
  const [query, setQuery] = useState({ q: "surat" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <NavBar setQuery={setQuery} units={units} setUnits={setUnits} />
      {weather && (
        <>
          <div className="container-dash">
            <Index weather={weather} items={weather.daily} />
            <IndexCenter weather={weather} items={weather.hourly} />
            <IndexRight weather={weather} units={setUnits} setQuery={setQuery }/>
          </div>
        </>
      )}
    </>
  );
}

export default App;
