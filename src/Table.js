import React from "react";
import "./Table.css";

const Table = ({ data }) => {
  return (
    <div className="table_container">
      {data.map((details, i) => (
        <table>
          <tr>
            <th colspan="2" style={{ backgroundColor: "#ffa500" }}>
              Date: {details.dt_txt}
            </th>
          </tr>
          <tr>
            <th colspan="2">Temperature</th>
          </tr>
          <tr>
            <th>Min</th>
            <th>Max</th>
          </tr>
          <tr>
            <td>{details?.main?.temp_min}</td>
            <td>{details?.main?.temp_max}</td>
          </tr>
          <tr>
            <td>Pressure</td>
            <td>{details?.main?.pressure}</td>
          </tr>
          <td>Humadity</td>
          <td>{details?.main?.humidity}</td>
        </table>
      ))}
    </div>
  );
};

export default Table;
