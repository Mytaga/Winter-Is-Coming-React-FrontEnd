import './App.css';
import Resorts from './Components/Resorts/Resorts';
import Header from './Components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import { Fragment } from 'react';
import * as resortService from './services/resortService';
import { useEffect, useState } from "react";
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {

  const [resorts, setResorts] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["countryName"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    resortService.getResorts()
      .then(resorts => {
        setResorts(resorts)
      })
      .catch(error => console.log(error))
  }, []);

  function filter(resorts) {
    return resorts.filter((resort) => {
      if (resort.countryName === filterParam) {
        return searchParam.some((newResort) => {
          return (
            resort[newResort]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          )
        })
      } else if (filterParam === "All") {
        return searchParam.some((newResort) => {
          return (
            resort[newResort]
              .toString()
              .toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          )
        })
      }
    })
  }

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/resorts" element={<Resorts
            resorts={resorts}
            filter={filter}
            query={query}
            setQuery={setQuery}
            setFilterParam={setFilterParam} />} />        
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
