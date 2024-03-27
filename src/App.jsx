/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./styles/index.scss";
import axios from "axios";

function App() {
  const [getData, setGetData] = useState({});
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
      setGetData(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("message: " + error.message);
    }
  };

  return (
    <div className="main">
      <div className="input-search">
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h1>{search}</h1>
      <div className="card-container">{getData.main.temp}</div>
      <button onClick={searchPressed}>search</button>
    </div>
  );
}

export default App;
