import React, { useState } from "react";
import data from "./data"
import './input.css';
import { ChevronDoubleDownIcon,ChevronDownIcon } from '@heroicons/react/20/solid';

function Table () {
const [show, setShow ] = useState(false);
const [selectCol, setSelectCol ] = useState(false);
function clickCol(){
    setSelectCol(!selectCol);
    //  console.log('d')
}
    //table column
    const column = Object.keys(data[0]);
    //table heading
    const headingData = () =>{
        return column.map((headData)=>{
            return <th scope="col" className="border md:bg-gray-200 border-gray-300 py-3 px-2" key={headData}>{headData}</th>
        })
    }
    //table row
    const rowsData = () =>{
        return data.map((tableData)=>{
            return(
                <>
                <tr className="border hover:bg-gray-300 px-6 py-4 border-gray-300 ">
                    <td><ChevronDownIcon className="h-auto w-5 tex-gray-300 mx-auto " onClick={clickCol => console.log(tableData.Name)}/></td>
                    {column.map((rowData)=>{
                    return <td className="border px-6 py-4 border-gray-300">{tableData[rowData]}</td>
                    })}
                </tr>
                
                {show && 
                <tr className="border hover:bg-gray-300  border-gray-300">
                ds
                </tr>}
                {show &&
                <tr> 
                {data.map((chooseRow,Name) =>{
                return <td className="border px-6 py-4 border-gray-300">{Name}</td>})}</tr>}
                </>
            )
        })
    }

    return(
        <div className="m-8 overflow-x-scroll" >
            <table className="min-w-full border-gray-400" >
                <thead className="border font-medium border-gray-400 md:bg-gray-200 ">
                    <tr className="border text-blue-500/100 text-left border-gray-300">
                        <th>
                        <ChevronDoubleDownIcon className="h-auto w-5 text-blue-500 mx-auto" onClick={()=>setShow(!show)}/>
                        </th>
                        {headingData()}
                    </tr>
                </thead>
                <tbody className="border font-medium">
                   {rowsData()}
                </tbody>
            </table>
        </div>
    )
}
export default Table;