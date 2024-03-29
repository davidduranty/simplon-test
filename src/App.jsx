/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./styles/index.scss";
import axios from "axios";

function App() {
  const [getData, setGetData] = useState([]);
  const [search, setSearch] = useState("");

  const api = {
    key: "97a26641079e46394fae11442be0ffc4",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const searchPressed = async () => {
    try {
      const res = await axios.get(
        `${api.base}weather?q=${search}&units=metric&APPID=${api.key}`
      );
      setGetData([res.data]);
      console.log([res.data]);
    } catch (error) {
      console.error("message: " + error.message);
    }
  };

  // useEffect(() => {
  //   searchPressed();
  // }, []);

  return (
    <div className="main">
      <h2>OpenWeather</h2>
      <div className="input-search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="City"
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      <div className="card-container">
        {getData.map((data) => (
          <div key={data.name}>
            <h1>{data.name}</h1>
            <p className="city">{data.sys.country}</p>
            <div className="icon">
              <img
                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                alt={data.weather[0].description}
              />
            </div>
            <p className="condition">
              Conditions : {data.weather[0].description}
            </p>
            <h3>{data.main.temp.toFixed(0)}° C</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
