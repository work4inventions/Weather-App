import AirIcon from "@mui/icons-material/Air";
import Compass from "../../Components/Cumpas/Compass";
import "./index.css";
const IndexRight = ({ weather, setQuery }) => {

  const cities = [
    {
      id: 1,
      title: "Ahmedabad",
    },
    {
      id: 2,
      title: "New York",
    },
    {
      id: 3,
      title: "Tokyo",
    },
    {
      id: 4,
      title: "Dubai",
    },
    {
      id: 5,
      title: "London",
    },
  ];
  return (
    <div className="right-side-container">
      <div className="right-top">
        <div className="con-a">
          <div className="wind-top">
            <AirIcon className="icon-air" />
            <p>Wind</p>
          </div>
          <div className="wind-bottom">
            <Compass weather={weather} />
          </div>
        </div>
        <div className="con-a mt-4">
          <div className="large-city">
            <p>Other large cities</p>
          </div>
          <div className="city-container">
            {cities.map((city) => (
              <button key={city.id} onClick={() => setQuery({ q: city.title })}>
                {city.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexRight;
