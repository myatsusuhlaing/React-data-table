import React, { useState, useEffect } from "react";
import data from "./data.js";

function DataTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    fetch("/data.js")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const tableHeaders = Object.keys(data[0]);

  return (
    <table>
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {tableHeaders.map((header, index) => (
              <td key={index}>{item[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;