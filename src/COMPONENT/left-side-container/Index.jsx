import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import "./index.css";
import RangeSlider from "../../Components/Range/Rangebar";

const Index = ({weather, items}) => {

  const { name, country, formattedLocalTime, temp, details, icon } = weather;




  return (
    <div className="left-side-container">
      <div className="top-container">
        <div className="top">
          <p className="text-sm flex justify-between">
            {formattedLocalTime}
          </p>
        </div>
        <p className="city-name">{`${name}, ${country}`}</p>
        <div className="center">
          <span className="temp">{temp}°</span>
        </div>
        <div className="bottom">
          <ThunderstormOutlinedIcon />
          <p className="weather">{details}</p>
        </div>
      </div>
      <div className="bottom-container">
        <div className="top">
          <p className="heading">5-Day Forecast</p>
        </div>
        <div className="bottom-containerr">
        {items.map((item, index) => (
            <div className="bottomm-con" key={index}>
              <p>{item.title}</p>
              
              <RangeSlider  />
              <p>{item.temp}°</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
