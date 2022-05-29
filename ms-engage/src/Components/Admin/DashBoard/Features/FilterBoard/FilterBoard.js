import React, { useState, useEffect } from 'react'
import "./FilterBoard.css";
import Datatable from './Datatable/Datatable';


require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function FilterBoard() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState("");
  const [q2, setQ2] = useState("");
  const [drop, setDrop] = useState("");



  useEffect(() => {
    fetch(`Car_sales.json`)
      .then(response => response.json())
      .then((json) => setData(json));
  }, []);


  // const { countries } = this.data;

  // const countryList = countries.length > 0 &&  countries.map((item, i) => {
  //   return (
  //     <option key={i} value={item.id}> {item.name} </option>
  //   )
  // }, this);


  // function Dropdown({title, items, multiSelect = false}){
  //     const [open, setOpen] = useState(false);
  //     const [selection, setSelection] = useState([]);

  //     function handleOnClick(item){

  //     }

  //     return (
  //       <div className="dd-wrapper">

  //       </div>
  //     )


  // }


  function searchbyName(rows) {
    return rows.filter(row => row.Name.toLowerCase().indexOf(q.toLowerCase()) > -1)
  }
  function searchbyCar(rows) {
    return rows.filter(row => row.Car.toLowerCase().indexOf(q.toLowerCase()) > -1)
  }


  

  return (
    <div>


      <div className='filter'>
          <select name="custom-select" id="manufacturer">
                <option value="hide"> --Manufacturer-- </option>
                <option value="jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="march">March</option>

          </select>
          <select name="custom-select" id="fuel_type">
                <option value="hide"> --Fuel-- </option>
                <option value="jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="march">March</option>

          </select>
          <select name="custom-select" id="transmission">
                <option value="hide"> --Transmission-- </option>
                <option value="jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="march">March</option>

          </select>
          <select name="custom-select" id="tr">
                <option value="hide"> --Transmission-- </option>
                <option value="jan">Jan</option>
                <option value="feb">Feb</option>
                <option value="march">March</option>

          </select>
        <input type="text" id='name' placeholder='Name' value={q} onChange={(e) => setQ(e.target.value)} />
        <input type="text" id='car' placeholder='Car' value={q2} onChange={(en) => setQ2(en.target.value)} />
      </div>


      <div className='datatable-board'>
        <Datatable
          data={data}
        ></Datatable>
      </div>
    </div>
  )
}


