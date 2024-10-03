import AcUnitIcon from "@mui/icons-material/AcUnit";
import { WbTwilight } from "@mui/icons-material";
import { TbUvIndex } from "react-icons/tb";
import { CiTempHigh } from "react-icons/ci";
import { IoWater } from "react-icons/io5";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./index.css";
import AnimationIcon from "@mui/icons-material/Animation";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";

const IndexCenter = ({ weather, items }) => {
  const {
    sunset,
    sunrise,
    deg,
    visibility,
    humidity,
    feels_like,
    pressure,
    temp_max,
    temp_min,
  } = weather;
  return (
    <div className="center-side-container">
      <div className="top-con">
        <div className="air-pollution">
          <div className="top">
            <AcUnitIcon className="icon-air" />
            <p>Air pollution</p>
          </div>
          <div className="center">
            <div className="slider-trac">
              <div
                className="slider-rang"
                style={{
                  width: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="bottom">
            <p>Air quality is good.</p>
          </div>
        </div>
        <div className="sunset">
          <div className="topp">
            <WbTwilight className="icon-air" />
            <p>Sunset</p>
          </div>
          <div className="center-sunset">
            <p>{sunset}</p>
          </div>

          <div className="bottom-sunset">
            <p>Sunrise: {sunrise}</p>
          </div>
        </div>
      </div>
      <div className="center-cont">
        <div className="top-con">
          {items.map((item, index) => (
            <div className="today-forecast" key={index}>
              <span>{item.title}</span>

              <FilterDramaIcon />
              <p>{item.temp}°</p>
            </div>
          ))}
        </div>
        <div className="right-Index">
          <div className="topp-index">
            <TbUvIndex className="icon-air" />
            <p>Degree</p>
          </div>
          <div className="center-index">
            <p>{deg} &#176;</p>
          </div>
        </div>
      </div>
      <div className="bottom-con">
        <div className="container-a">
          <div className="top-a">
            <CiTempHigh className="icon-air" />
            <p>Feels like</p>
          </div>
          <div className="center-a">
            <p>{feels_like}°</p>
            <p></p>
          </div>
        </div>
        <div className="container-b">
          <div className="top-a">
            <IoWater className="icon-air" />
            <p>Humadity</p>
          </div>
          <div className="center-b">
            <p>{humidity}%</p>
          </div>
        </div>
        <div className="container-c">
          <div className="top-a">
            <VisibilityIcon className="icon-air" />
            <p>Visibility</p>
          </div>
          <div className="center-b">
            <p>{visibility}</p>
          </div>
        </div>
      </div>
      <div className="bottom-con">
        <div className="container-c">
          <div className="top-a">
            <AnimationIcon className="icon-air" />
            <p>Pressure</p>
          </div>
          <div className="center-b">
            <p>{pressure}</p>
          </div>
        </div>
        <div className="container-c">
          <div className="top-a">
            <DeviceThermostatIcon className="icon-air" />
            <p>Max Temp</p>
          </div>
          <div className="center-b">
            <p>{temp_max}</p>
          </div>
        </div>
        <div className="container-c">
          <div className="top-a">
            <DeviceThermostatIcon className="icon-air" />
            <p>Min Temp</p>
          </div>
          <div className="center-b">
            <p>{temp_min}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexCenter;
