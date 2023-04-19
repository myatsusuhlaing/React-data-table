import React from "react";
import data from "./data"
import './input.css';
import { ChevronDoubleDownIcon,ChevronDownIcon } from '@heroicons/react/20/solid';

function Table () {

    //table column
    const column = Object.keys(data[0]);
    //table heading
    const headingData = () =>{
        return column.map((headData)=>{
            return <th scope="col" className="border md:bg-gray-200 ... px-6 py-4 border-gray-300 " key={headData}>{headData}</th>
        })
    }
    //table row
    const rowsData = () =>{
        return data.map((tableData)=>{
            return(
                <tr className="border hover:bg-gray-300 ... px-6 py-4 border-gray-300 ">
                    <td><ChevronDownIcon className="h-6 w-6 tex-gray-300 justify-center items-center" /></td>
                    {column.map((rowData)=>{
                    return <td className="border px-6 py-4 border-gray-300">{tableData[rowData]}</td>
                })}
                </tr>
            )
        })
    }

    return(
        <div className="m-8 ..." >
            <table className="min-w-full border-gray-400">
                <thead className="border font-medium border-gray-400 md:bg-gray-200 ... ">
                    <tr className="border text-blue-500/100 text-left border-gray-300">
                        <ChevronDoubleDownIcon className="h-6 w-6 text-blue-500 justify-center items-center" />
                        {headingData()}
                    </tr>
                </thead>
                <tbody className="border font-medium text-left">
                   {rowsData()}
                </tbody>
            </table>
        </div>
    )
}
export default Table;