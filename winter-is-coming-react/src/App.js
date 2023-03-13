import './App.css';
import {Resorts} from './components/Resorts/Resorts';
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
  const [formValues, setFormValues] = useState({
    name: '',
    elevation: '',
    description: '',
    imageUrl: '',
    numberOfSlopes: 0,
    skiAreaSize: 0,
    countryId: '',
  });

  const [formErrors, setFormErros] = useState({
    name: '',
    elevation: '',
    description: '',
    imageUrl: '',
    numberOfSlopes: '',
    skiAreaSize: '',
    countryId: '',
  });

  useEffect(() => {
    resortService.getResorts()
      .then(resorts => {
        setResorts(resorts)
      })
      .catch(error => console.log(error))
  }, []);

  const onResortFilterSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.search;
    const country = formData.country;

    const filtered = await resortService.getFilteredResorts(searchQuery, country);

    setResorts(state => [...state, filtered]);
  }

  const onResortCreateSubmit = async (e) => {
    // stop automatic form submit
    e.preventDefault();

    // Take form data from DOM tree 
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    // Send ajax request to server
    const createdResort = await resortService.addResort(data);

    // If successfull add new user to the state
    setResorts(state => [...state, createdResort]);
  };

  const formChangeHandler = (e) => {
    setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
  };

  const formValidate = (e) => {
    const value = e.target.value;
    const errors = {};

    if (e.target.name === 'name' && (value.length < 2 || value.length > 50)) {
      errors.name = 'Resort name should be between 2 and 50 characters';
    }

    if (e.target.name === 'elevation' && (value.length < 2 || value.length > 4)) {
      errors.elevation = 'Elevation should be between 2 and 4 characters';
    }

    if (e.target.name === 'description' && (value.length < 20 || value.length > 150)) {
      errors.description = 'Description should be between 20 and 150 characters';
    }

    if (e.target.name === 'imageUrl' && (value.length < 10 || value.length > 100)) {
      errors.imageUrl = 'Image URL should be between 10 and 100 characters';
    }

    if (e.target.name === 'numberOfSlopes' && (value < 0 || value > 1000)) {
      errors.numberOfSlopes = 'Number of slopes should be between 0 and 1000';
    }

    if (e.target.name === 'skiAreaSize' && (value === null)) {
      errors.skiAreaSize = 'Number of slopes should be between 0 and 1000';
    }

    setFormErros(errors);
  };

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
            formValues={formValues}
            formErrors={formErrors}
            onResortFilterSubmit={onResortFilterSubmit}
            onResortCreateSubmit={onResortCreateSubmit}
            formChangeHandler={formChangeHandler}
            formValidate={formValidate}/>}
            />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
