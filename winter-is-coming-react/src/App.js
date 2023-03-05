import './App.css';
import Resorts from './Components/Resorts/Resorts';
import Header from './Components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import { Fragment } from 'react';
import * as resortService from './services/resortService';
import { useEffect, useState } from "react";

function App() {

  const [resorts, setResorts] = useState([]); 

  useEffect(() => {
    resortService.getResorts()
      .then(resorts => {
        setResorts(resorts)
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resorts" element={<Resorts resorts={resorts} />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
