import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
import Admin from './Components/Admin/Admin';
import PricePred from './Components/Admin/DashBoard/Features/PricePred/PricePred';
import Services from "./Components/Home/Serivces/Services";
import LeaderBoard from './Components/Admin/DashBoard/Features/LeaderBoard/LeaderBoard';
import Analytics from './Components/Admin/DashBoard/Features/Analytics/Analytics';
import Pricepredres from "./Components/Admin/DashBoard/Features/PricePred/Pricepredres";

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/admin' exact element={<Admin/>}></Route>
          <Route path='/pricepred' exact element={<PricePred/>}></Route>
          <Route path='/services' exact element={<Services/>}></Route>
          <Route path='/leader' exact element={<LeaderBoard/>}></Route>
          <Route path='/analytics' exact element={<Analytics/>}></Route>
          <Route path='/pricepredres' exact element={<Pricepredres/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
