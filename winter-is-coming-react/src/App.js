import './App.css';
import { Resorts } from './components/Resorts/Resorts';
import Header from './components/Header/Header';
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import { Fragment } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResortDetails from './components/Resort/ResortDetails';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import * as accountService from './services/accountService';

function App() {

  const [auth, setAuth] = useState({});
  const navigate = useNavigate();

  const onLoginSubmit = async (data) => {
    try {
      const result = await accountService.login(data);
      setAuth(result);
    } catch (error) {
      console.log('Credentials do not mach!')
    }

    navigate('/');
  };

  const onRegisterSubmit = async (data) => {
    await accountService.login(data);
    navigate('/login');
  };

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLoginSubmit={onLoginSubmit} />} />
          <Route path="/register" element={<Register onRegisterSubmit={onRegisterSubmit}/>} />
          <Route path="/resorts" element={<Resorts />} />
          <Route path="/resorts/:resortId/*" element={<ResortDetails />} />
        </Routes>
        <Footer />
      </main>
    </Fragment>
  );
}

export default App;
