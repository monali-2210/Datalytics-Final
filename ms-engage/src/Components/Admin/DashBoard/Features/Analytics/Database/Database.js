import React, { useState, useEffect } from 'react'
import "../Analytics.css";
import Datatable from '../../FilterBoard/Datatable/Datatable';

require("es6-promise").polyfill();
require("isomorphic-fetch");


export default function Database() {

    const [prod, setProd] = useState([]);
    const [exports, setExports] = useState([]);
    const [domestic, setDomestic] = useState([]);


    useEffect(() => {
        fetch(`Production_trends.json`)
        .then(response => response.json())
        .then((json) => setProd(json))
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`Export_Trends.json`)
        .then(response => response.json())
        .then((json) => setExports(json))
        .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        fetch(`Domestic_Sales_Trends.json`)
        .then(response => response.json())
        .then((json) => setDomestic(json))
        .catch((err) => console.log(err));
    }, []);
    

    return (
        <div>
            <div className="chart-heading" style={{marginTop: "30px"}}>
                Production Trends
            </div>
            <Datatable data={prod}></Datatable>
            <div className="chart-heading" style={{marginTop: "50px"}}>
                Export Trends
            </div>
            <Datatable data={exports}></Datatable>
            <div className="chart-heading" style={{marginTop: "50px"}}>
                Domestic Sales Trends
            </div>
            <Datatable data={domestic}></Datatable>
            
        </div>
    )
}
