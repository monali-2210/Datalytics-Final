import React, { useEffect, useState } from 'react'
import "./Analytics.css";
import Database from './Database/Database';

import _ from 'lodash';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


require("es6-promise").polyfill();
require("isomorphic-fetch");

export default function Analytics() {

    

    const [line, setLine] = useState({
        labels: ["Jan", "Feb", "Mar"],
        datasets: [
            {
                label: "First Dataset",
                data: [10, 30, 25],
                backgroundColor: 'yellow',
            }
        ]
    });

    const [drivetrain, SetDrivetrain] = useState({
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
            maintainAspectRation: false,
            aspectRatio: 2,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false
        }
        ]
    });

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
            maintainAspectRation: false,
            aspectRatio: 2,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false
        }
        ]
    });

    const [emission, SetEmission] = useState({
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
            maintainAspectRation: false,
            aspectRatio: 2,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false
        }
        ]
    });

    const [transmission, SetTransmission] = useState({
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
            maintainAspectRation: false,
            aspectRatio: 2,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false
        }
        ]
    });

    const [manufac, setManufac] = useState({
        datasets: [
            {
                label: "Manufacturers",
                borderColor: "blue"
            }
        ],
        options: [{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRation: false,
            aspectRatio: 2,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false,
        }
        ]
    })

    const [model, setModel] = useState({
        datasets: [
            {
                label: "Model",
                borderColor: "blue"
            }
        ],
        options: [{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRation: false,
            aspectRatio: 2,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false,
        }
        ]
    })

    const [vehicletype, setVehicletype] = useState({
        datasets: [
            {
                label: "Horsepower",
                borderColor: "blue"
            }
        ],
        options: [{
            indexAxis: 'y',
            responsive: true,
            maintainAspectRation: false,
            onResize: null,
            resizeDelay: 0,
            parsing: false,
            normalized: true,
            animation: false,
        }
        ]
    })


    function fetchData() {
        fetch(`Database.json`)
            .then(data => {
                const res = data.json();
                return res;
            })
            .then(res => {
                const line_data = []
                const line_label = []
                const price = _.unionBy(res, 'Valves_Per_Cylinder');

                for (var i of price) {
                    line_data.push(i.Valves_Per_Cylinder);
                    line_label.push(i.id);
                }

                setLine({
                    datasets: [
                        { data: line_data },
                    ],
                    labels: line_label
                })

                // console.log("res", res)
                const label = [];
                const data = [];
                const fuel_type = _.uniqBy(res, 'Fuel_Type');

                for (var i of fuel_type) {
                    label.push(i.Fuel_Type);
                    data.push(i.id);
                }
                setData({
                    datasets: [
                        { data: data },
                    ],
                    labels: label
                })

                const label_drivetrain = [];
                const data_drivetrain = [];
                const drive_train = _.unionBy(res, 'Drivetrain');

                for (var i of drive_train) {
                    label_drivetrain.push(i.Drivetrain);
                    data_drivetrain.push(i.id);
                }
                SetDrivetrain({
                    datasets: [
                        { data: data_drivetrain },
                    ],
                    labels: label_drivetrain
                })

                const label_emission = [];
                const data_emission = [];
                const emission_norm = _.unionBy(res, "Emission_Norm")

                for(var i of emission_norm){
                    label_emission.push(i.Emission_Norm);
                    data_emission.push(i.id);
                }
                SetEmission({
                    datasets:[
                        {data: data_emission},
                    ],
                    labels: label_emission
                })

                const label_transmission = [];
                const data_transmission = [];
                const transmission = _.unionBy(res, "Type")

                for(var i of transmission){
                    label_transmission.push(i.Type);
                    data_transmission.push(i.id);
                }
                SetTransmission({
                    datasets:[
                        {data: data_transmission},
                    ],
                    labels: label_transmission
                })


            })
    }

    fetchData();

    const [bar, setBar] = useState({
        datasets: [{
            borderWidth: 0,
            backgroundColor: 'RGB(30, 144, 255)',
            label: "Monthly Sales"
        }
        ],
        options: {
            y: {
                beginAtZero: true
            },
            maintainAspectRation: false,
            responsive: true,
        }
    })

    const [bar2, setBar2] = useState({
        datasets: [{
            data : [15, 16, 17, 18],
            borderWidth: 0,
            backgroundColor: 'RGB(30, 144, 255)',
            label: "Annual Sales"
        }
        ],
        options: {
            y: {
                beginAtZero: true
            },
            maintainAspectRation: false,
            responsive: true,
        }
    })

    function fetchData2() {
        fetch(`Car_sales.json`)
            .then(data => {
                const res = data.json();
                return res;
            })
            .then(res => {
                const bar_data1 = []
                const bar_data2 = []
                const bar_label = []


                for (var i of res) {
                    bar_data1.push(i.Sales_in_thousands)
                    const datehere = new Date(i.Latest_Launch);
                    bar_label.push(datehere.getMonth() + 1)
                }

                for (var i of [...new Set(bar_label)]) {
                    bar_data2[i] = 0;
                }

                for (let i = 0; i < bar_label.length; i++) {
                    bar_data2[bar_label[i]] = bar_data2[bar_label[i]] + bar_data1[i]
                }
                //2, 6, 1, 3, 10, 8, 4, 11, 9, 7, 5, 12

                const bar_data3 = []

                for (let i = 0; i < 12; i++) {
                    bar_data3[i] = bar_data2[i + 1];
                }
                // console.log([...new Set(bar_label)], bar_data3)

                setBar({
                    labels: ['Feb', 'Jun', 'Jan', 'Mar', 'Oct', 'Aug', 'Apr', 'Nov', 'Sept', 'July', 'May', 'Dec'],
                    datasets: [
                        { data: bar_data2,
                          label: "Monthly Sales" },
                    ],
                })



                const label_manufac = [];
                const data_manufac = [];
                const manufac = _.uniqBy(res, 'Manufacturer');

                for (var i of manufac) {
                    label_manufac.push(i.Manufacturer);
                    data_manufac.push(i.id);
                }
                setManufac({
                    datasets: [
                        { data: data_manufac,
                        label: "Manufacturers",
                        borderWidth: 0,
                        backgroundColor: 'RGB(30, 144, 255)',
                    },
                    ],
                    labels: label_manufac
                })

                const label_model = [];
                const data_model = [];
                const model = _.uniqBy(res, 'Model');

                for (var i of model) {
                    label_model.push(i.Manufacturer + ' ' + i.Model);
                    data_model.push(i.id);
                }
                setModel({
                    datasets: [
                        { data: data_model,
                        label: "Model",
                        borderWidth: 0,
                        backgroundColor: 'RGB(30, 144, 255)',
                    },
                    ],
                    labels: label_model
                })


                const label_vehicle_type = [];
                const data_vehicle_type = [];
                const vehicle_type = _.uniqBy(res, 'Vehicle_type');

                for (var i of vehicle_type) {
                    label_vehicle_type.push(i.Vehicle_type);
                    data_vehicle_type.push(i.id);
                }
                setVehicletype({
                    datasets: [
                        { data: data_vehicle_type,
                        label: "Vehicle Type",
                        borderWidth: 0,
                        backgroundColor: 'RGB(30, 144, 255)',
                    },
                    ],
                    labels: label_vehicle_type
                })
                
            })
    }

    
    fetchData2();





    const [toggleState1, setToggleState1] = useState(1);

    const toggleTab1 = (index) => {
        setToggleState1(index);
    }

    const [toggleState2, setToggleState2] = useState(1);

    const toggleTab2 = (index) => {
        setToggleState2(index);
    }

    function fetchData3(){
        fetch(`Proc`)
    }

    return (
        <>

            <div className="analytics-body">
                

            <div className="analytics-row1" >
            <div className="chart-heading">
                        Best Time to launch a new Car
                    </div>
                <Bar data={bar} ></Bar>
            </div>

            <div className="analytics-row2">


                {/* //Chart 1 */}
                <div className="chart-container">

                    <div className="chart-heading">
                        Customer Segmentation
                    </div>

                    <div className="bloc-tabs">
                        <button className={toggleState1 === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab1(1)}>
                            Fuel Type
                        </button>
                        <button className={toggleState1 === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab1(2)}>
                            Drive Train
                        </button>
                        <button className={toggleState1 === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab1(3)}>
                            Emission Norm
                        </button>
                        <button className={toggleState1 === 4 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab1(4)}>
                            Transmission
                        </button>

                    </div>

                    <div className="content-tabs">

                        <div
                            className={toggleState1 === 1 ? "content  active-content" : "content"}
                        >
                            <Doughnut className='customer-segments1' data={data} />
                        </div>

                        <div
                            className={toggleState1 === 2 ? "content  active-content" : "content"}
                        >
                            <Doughnut className='customer-segments1' data={drivetrain} />
                        </div>

                        <div
                            className={toggleState1 === 3 ? "content  active-content" : "content"}
                        >
                            <Doughnut className='customer-segments1' data={emission} />
                        </div>
                        <div
                            className={toggleState1 === 4 ? "content  active-content" : "content"}
                        >
                            <Doughnut className='customer-segments1' data={transmission} />
                        </div>

                    </div>



                </div>


                {/* //Chart 2 */}
                <div className="chart-container">

                    <div className="chart-heading">
                        Know your vehicle
                    </div>

                    <div className="bloc-tabs">
                        <button className={toggleState2 === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab2(1)}>
                            Manufacturer
                        </button>
                        <button className={toggleState2 === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab2(2)}>
                            Model
                        </button>
                        <button className={toggleState2 === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab2(3)}>
                            Vehicle Type
                        </button>


                    </div>

                    <div className="content-tabs">

                        <div
                            className={toggleState2 === 1 ? "content  active-content" : "content"}
                        >
                            <Bar className='bussiness-segment1' data={manufac} ></Bar>
                        </div>

                        <div
                            className={toggleState2 === 2 ? "content  active-content" : "content"}
                        >
                            <Bar className='bussiness-segment1' data={model}></Bar>
                        </div>

                        <div
                            className={toggleState2 === 3 ? "content  active-content" : "content"}
                        >
                            <Bar className='customer-segments1' data={vehicletype}></Bar>
                        </div>

                    </div>



                </div>


            </div>

            {/* <div className="analytics-row1" >
            <div className="chart-heading">
                        Best Time to launch a new Car
                    </div>
                <Bar data={bar2} ></Bar>
            </div> */}

            <div className="analytics-row3">
                <Database></Database>
            </div>

            
            </div>



        </>
    )
}
