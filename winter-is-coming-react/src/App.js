import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";

import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';
import { Logout } from './components/Logout/Logout';
import { ResortDetails } from './components/Resort/ResortDetails';
import { Footer } from './components/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';
import { Profile } from './components/Profile/Profile';
import { Resorts } from './components/Resorts/Resorts';
import { MyResorts } from './components/Resorts/MyResorts';
import { TopResorts } from './components/Resorts/TopResorts';
import { Header } from './components/Header/Header';
import { ProfileProvider } from './contexts/ProfileContext';

function App() {

  return (
    <AuthProvider>
      <ProfileProvider>
      <Fragment>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/resorts" element={<Resorts />} />
            <Route path="/myResorts" element={<MyResorts />} />
            <Route path="/topResorts" element={<TopResorts />} />
            <Route path="/resorts/:resortId/*" element={<ResortDetails />} />
          </Routes>
          <Footer />
        </main>
      </Fragment>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
