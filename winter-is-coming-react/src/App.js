import './App.css';
import { Resorts } from './components/Resorts/Resorts';
import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import { Fragment } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResortDetails from './components/Resort/ResortDetails';
import { Footer } from './components/Footer/Footer';

function App() {

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resorts" element={<Resorts/>} />
          <Route path="/resorts/:resortId/*" element={<ResortDetails />} />
        </Routes>
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
