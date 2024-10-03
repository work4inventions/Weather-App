import "./navbar.css";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useState, useEffect } from "react";


const NavBar = ({ setQuery }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [city, setCity] = useState()

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark');
      document.body.className = savedTheme;
    }
  }, []);

  // Toggle theme and save preference to localStorage
  const toggleTheme = () => {
    const newTheme = darkMode ? 'dark-theme' : 'light-theme';
    setDarkMode(!darkMode);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  const handleSearchClick = async () => {
    if (city.trim() !== "") {
      try {
        await setQuery({ q: city });
        setCity("");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  };

 

  return (
    <nav className="navBar">
      <div className="container">
        <div className="search-container">
          <input
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            className="searchBar"
            type="text"
            name="search"
            placeholder="search by cities"
          />
        </div>
        <button className="searchButton" onClick={handleSearchClick}>
          Search 
        </button>
        <div className="left cursor-pointer" onClick={toggleTheme}>
          {darkMode ? <DarkModeIcon /> : <WbSunnyIcon />}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
