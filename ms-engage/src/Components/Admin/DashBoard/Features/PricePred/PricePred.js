import React, { useEffect, useState } from 'react'
import "./PricePred.css";




const PricePred = () => {

  const [apidata, setApidata] = useState([{}])

  useEffect(() => {
    fetch("/pricepred")
      .then(
        res => res.json()
      )
      .then(data => {
        setApidata(data)
        console.log(data)
      })
  })



  return (
    <>

      <div action='' className="pricepred">

        <div class="login-box">
          <h2>Fill this form out</h2>

          <form action='http://192.168.6.204:5000/pricepred' >

            <div class="user-box">
              <input type="number" name="year" required />
              <label>Year</label>
            </div>

            <div class="user-box">
              <input type="number" name="presnt_price" required />
              <label>Showroom Price (in Lakhs)</label>
            </div>

            <div class="user-box">
              <input type="number" name="kms_driven" required />
              <label>Kilometers Driven</label>
            </div>
            
            <div className="user-box">

            <h4>Number of Previous Owners</h4>
              <select name="owner" id="" defaultValue={0} required>
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              
            </div>

            <div className="user-box">
              
            <h4>Fuel Type</h4>
              <select name="fuel_type" id="" defaultValue={0} required>
                <option value="0">Diesel</option>
                <option value="1">Petrol</option>
                <option value="2">CNG</option>
              </select>
              
            </div>

            <div className="user-box">
              
            <h4>Seller Type</h4>
              <select name="seller_type" id="" defaultValue={0} required>
                <option value="0">Dealer</option>
                <option value="1">Individual</option>
              </select>
              
            </div>

            <div className="user-box">
              
            <h4>Transmission Type</h4>
              <select name="transmission" id="" defaultValue={0} required>
                <option value="0">Manual</option>
                <option value="1">Automatic</option>
              </select>
              
            </div>

            <a href="/pricepredres">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>

          </form>


        </div>

      </div> 


    </>
  )
}

export default PricePred;
