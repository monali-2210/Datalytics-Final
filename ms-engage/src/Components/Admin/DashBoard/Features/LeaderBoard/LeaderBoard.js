import React, { useState, useEffect } from 'react'
import "./LeaderBoard.css";
import SortTable from "./SortTable/SortTable";
import Datatable from "../FilterBoard/Datatable/Datatable"



require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function LeaderBoard() {
    const [data, setData] = useState([]);


    useEffect(() => {
        fetch(`leading_cars.json`)
            .then(response => response.json())
            .then((json) => setData(json))
            .catch((err) => console.log(err));
    }, []);


    return (
        <>
            <div className="leader-nav">
                <h2>See who is leading the industry!</h2>
            </div>
            <div className='datatable-board'>
                <SortTable data = {data}></SortTable>
            </div>
        </>
    )
}

// function Item(data) {
//     return (
//         <>
//             {
//                 // data.map((value, index) => (
//                 //     <div className="flex" key={index}>
//                 //         <div className="item">
//                 //             <div className="info">
//                 //                 <h3 className="name text-dark">Make: {value.Make}</h3>
//                 //                 <h3 className="name text-dark">Model: {value.Model}</h3>
//                 //                 <h3 className="name text-dark">Variant: {value.Variant}</h3>
//                 //             </div>
//                 //         </div>
//                 //         <div className="item">
//                 //             <span>{value.score}</span>
//                 //         </div>
//                 //     </div>
//                 // ))
//             }

//         </>
//     )
// }
