import React from "react";
import data from "./data"
import './input.css';

function Table () {

    //table column
    const column = Object.keys(data[0]);
    //table heading
    const headingData = () =>{
        return column.map((headData)=>{
            return <th scope="col" className="border-r px-6 py-4 dark:border-neutral-500" key={headData}>{headData}</th>
        })
    }
    //table row
    const rowsData = () =>{
        return data.map((tableData)=>{
            return(
                <tr  className="border-r px-6 py-4 dark:border-neutral-500">
                    {column.map((rowData)=>{
                    return <td className="border-r px-6 py-4 dark:border-neutral-500 ">{tableData[rowData]}</td>
                })}
                </tr>
            )
        })
    }

    return(
        <div className="flex flex-col " >
            <table className="min-w-full border text-center text-sm font-light dark:border-neutral-500">
                <thead className="border-b font-medium dark:border-neutral-500">
                    <tr className="text-blue-600/100 dark:border-neutral-500">{headingData()}</tr>
                </thead>
                <tbody className="border-b font-medium dark:border-neutral-500">
                   {rowsData()}
                </tbody>
            </table>
        </div>
    )
}
export default Table;