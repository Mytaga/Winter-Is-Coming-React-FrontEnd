import './App.css';
import { Resorts } from './components/Resorts/Resorts';
import { MyResorts } from './components/Resorts/MyResorts';
import Header from './components/Header/Header';
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import { Fragment } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import ResortDetails from './components/Resort/ResortDetails';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';
import * as accountService from './services/accountService';
import { AuthContext } from './contexts/AuthContext';

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
    await accountService.register(data);
    navigate('/login');
  };

  const onLogout = async () => {
    await accountService.logout(auth.token);
    setAuth({});
  }

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth.id,
    token: auth.token,
    username: auth.userName,
    image: auth.image,
    isAuthenticated: !!auth.token,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      <Fragment>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/resorts" element={<Resorts />} />
            <Route path="/myResorts" element={<MyResorts />} />
            <Route path="/resorts/:resortId/*" element={<ResortDetails />} />
          </Routes>
          <Footer />
        </main>
      </Fragment>
    </AuthContext.Provider>
  );
}

export default App;
