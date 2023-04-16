import './App.css';
import { Fragment } from 'react';
import { Route, Routes } from "react-router-dom";

import { RouteGuard } from './components/RouteGuard/RouteGuard';
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
import { RegisterError } from './components/Errors/RegisterError';
import { LoginError } from './components/Errors/LoginError';

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
              <Route path="/resorts" element={<Resorts />} />
              <Route path="/logout" element={
                <RouteGuard>
                  <Logout />
                </RouteGuard>
              } />
              <Route path="/profile" element={
                <RouteGuard>
                  <Profile />
                </RouteGuard>
              } />
              <Route path="/myResorts" element={
                <RouteGuard>
                  <MyResorts />
                </RouteGuard>
              } />
              <Route path="/topResorts" element={
                <RouteGuard>
                  <TopResorts />
                </RouteGuard>
              } />
              <Route path="/resorts/:resortId/*" element={<ResortDetails />} />
              <Route path="/registerError" element={<RegisterError/>}/>
              <Route path="/loginError" element={<LoginError/>}/>
            </Routes>
            <Footer />
          </main>
        </Fragment>
      </ProfileProvider>
    </AuthProvider>
  );
}

export default App;
