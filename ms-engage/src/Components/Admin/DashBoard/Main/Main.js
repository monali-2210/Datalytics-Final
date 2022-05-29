import React, { useEffect, useState } from 'react'
import "./Main.css";
import Datatable from "../Features/FilterBoard/Datatable/Datatable";

import _ from 'lodash';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

require("es6-promise").polyfill();
require("isomorphic-fetch");



// const data = {
//   labels: ['January', 'February', 'March',
//     'April', 'May'],
//   datasets: [
//     {
//       // label: 'Rainfall',
//       backgroundColor: ['red', 'blue', 'green', 'pink', 'black'],
//       borderWidth: 0,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

const Main = () => {

  // const 
  const [data, setData] = useState({
    datasets: [
      {
        backgroundColor: [
          '#354259', '#CDC2AE', '#C2DED1', '#A25B5B', '#7D1E6A'
        ],
        borderWidth: 0,
      }
    ],
    options: [{
      responsive: true,
      maintainAspectRation: true,
      aspectRatio: 2,
      onResize: null,
      resizeDelay: 0,
      parsing: false,
      normalized: true,
      animation: false
    }
    ]
  });

  const [data2, setData2] = useState([]);

  useEffect(() => {
    fetch(`leading_cars.json`)
      .then(response => response.json())
      .then((json) => setData2(json))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const fetchData = () => {
      fetch(`Database.json`)
        .then(data => {
          const res = data.json();
          return res;
        })
        .then(res => {
          // console.log("res", res)
          const label = [];
          const data = [];

          res = _.uniqBy(res, 'Fuel_Type');

          for (var i of res) {
            label.push(i.Fuel_Type);
            data.push(i.id);
          }

          setData({
            datasets: [
              { data: data },
            ],
            labels: label,
          })




        })
        .catch(e => {
          console.log("error", e)
        })
    }
    fetchData();
  }, [])

  return (
    <div className='dashboard-main'>


      <div className="about-user">
        <div className="row1-usr">
          <h1>Welcome to your dashboard!</h1>
          <h2>{localStorage.getItem("name")}</h2>
          <h3>email: {localStorage.getItem("email")}</h3>
        </div>
        <div className="row2">
          <img src={localStorage.getItem("profilePic")} alt="" />
        </div>
      </div>


      <div className="main-stats">
        <div className="num-stats">
          <i className="fa-solid fa-arrow-up-right-dots"></i>
          <h1>30,82,279</h1>
          <p>Passenger Car sales <br/> Increase [Dec 2021]</p>
        </div>
        <div className="num-stats">
          <i className="fa-solid fa-car"></i>
          <h2>Maruti Suzuki</h2>
          <h4>Last year sales 12,93,840</h4>
        </div>
        <div className="num-stats">
          <i className='fa-solid fa-arrow-down'></i>
          <h1>33959</h1>
          <h4>Car registration <br/> Decreased [April 2022]</h4>
        </div>
        <div className="num-stats">
          <i className='fa fa-line-chart'></i>
          <h1>Maruti Suzuki Alto</h1>
          <h4>Top Selling Car in India</h4>
        </div>
      </div>
    </div>
  )
}

export default Main;
