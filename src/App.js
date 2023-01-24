import "./App.css";
import { Button, CircularProgress, TextField } from "@mui/material";
import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import Table from "./Table";

function App() {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const handleSearch = () => {
    setIsLoading(true);
    const geoApi = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=1635890035cbba097fd5c26c8ea672a1`;
    axios.get(geoApi).then((response) => {
      // console.log(response);
      const { lat, lon } = response?.data[0];
      const forecastApi = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=1635890035cbba097fd5c26c8ea672a1`;

      axios.get(forecastApi).then((response) => {
        setData(response?.data?.list);
        setIsLoading(false);
      });
    });
  };

  // const dateString = moment(1674572400).format("MM/DD/YYYY");

  // console.log(dateString);

  return (
    <div className="App">
      <header className="header">
        <div className="header__title">
          <h3 className="title">Weather in your city</h3>
        </div>

        <div className="header__center">
          <TextField
            className="TextField"
            id="outlined-basic"
            label="Search"
            variant="outlined"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            hiddenLabel
            size="small"
            color="warning"
            required
            sx={{
              marginRight: 4,
            }}
          />

          <div className="divider"></div>

          <Button
            variant="contained"
            color="warning"
            sx={{
              color: "white",
              backgroundColor: "orange",
              borderColor: "orange",
              marginRight: 10,
            }}
            onClick={handleSearch}
          >
            Search
          </Button>

          {isLoading ? (
            <CircularProgress
              sx={{
                color: "#ffa500",
                marginLeft: 4,
              }}
            />
          ) : (
            <div style={{ width: 60 }}></div>
          )}
        </div>
      </header>

      <Table data={data} />
    </div>
  );
}

export default App;
