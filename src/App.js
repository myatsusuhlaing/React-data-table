import React from "react";
import Table from "./Table";
import data from "./data"
import './App.css';

function DataTable(){
  const getHeadings = () =>{
    return Object.keys(data[0]);
  }

  return(
    <div className="datatable">
      <h2>React Data Table</h2>
      <Table tbodyData={data} theadData={getHeadings()} />
    </div>
  )
}
export default DataTable;