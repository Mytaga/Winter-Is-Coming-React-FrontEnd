import './App.css';
import Resorts from './Components/Resorts/Resorts';
import Header from './Components/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/resorts" element={<Resorts/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
