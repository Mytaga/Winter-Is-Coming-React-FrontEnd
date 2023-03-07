import './App.css';
import Resorts from './components/Resorts/Resorts';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { Fragment } from 'react';
import * as resortService from './services/resortService';
import { useEffect, useState } from "react";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {

  const [resorts, setResorts] = useState([]);
  // const [query, setQuery] = useState("");
  // const [searchParam] = useState(["countryName"]);
  // const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    resortService.getResorts()
      .then(resorts => {
        setResorts(resorts)
      })
      .catch(error => console.log(error))
  }, []);

  // function filter(resorts) {
  //   return resorts.filter((resort) => {
  //     if (resort.countryName === filterParam) {
  //       return searchParam.some((newResort) => {
  //         return (
  //           resort[newResort]
  //             .toString()
  //             .toLowerCase()
  //             .indexOf(query.toLowerCase()) > -1
  //         )
  //       })
  //     } else {
  //       return searchParam.some((newResort) => {
  //         return (
  //           resort[newResort]
  //             .toString()
  //             .toLowerCase()
  //             .indexOf(query.toLowerCase()) > -1
  //         )
  //       })
  //     }
  //   })
  // }

  const onResortFilterSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.search;
    const country = formData.country;

    const filtered = await resortService.getFilteredResorts(searchQuery, country);
    console.log(filtered);
    setResorts(filtered);
  }

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resorts" element={<Resorts
            resorts={resorts}
            onResortFilterSubmit={onResortFilterSubmit} />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
