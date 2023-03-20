import './App.css';
import { Resorts } from './components/Resorts/Resorts';
import Header from './components/Header/Header';
import { useNavigate, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import { Fragment } from 'react';
import * as resortService from './services/resortService';
import * as priceService from './services/priceService';
import * as commentService from './services/commentService';
import { useEffect, useState } from "react";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ResortDetails from './components/Resort/ResortDetails';
import ResortCreate from './components/Resort/ResortCreate';
import PriceCreate from './components/Price/PriceCreate';
import { Comments } from './components/Comments/Comments';
import { CommentCreate } from './components/Comment/CommentCreate';
import { Footer } from './components/Footer/Footer';

function App() {
  const navigate = useNavigate();
  const [resorts, setResorts] = useState([]);

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
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const createdResort = await resortService.addResort(data);

    setResorts(state => [...state, createdResort]);
    navigate('/resorts');
  };

  const onPriceCreateSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    await priceService.addPrice(data);
    navigate('/resorts');
  }

  const onCommentCreateSubmit = async (e, resortId) =>{
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    await commentService.addComment(resortId, data);
    navigate(`/resorts/${resortId}/comments`);
  }

  return (
    <Fragment>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resorts" element={<Resorts
            resorts={resorts}
            onResortFilterSubmit={onResortFilterSubmit}
          />} />
          <Route path="/resorts/:resortId/*" element={<ResortDetails />} />
          <Route path="/resorts/:resortId/comments" element={<Comments />} />
          <Route path="/resorts/:resortId/createComment" element={<CommentCreate
            onCommentCreateSubmit={onCommentCreateSubmit}
            />} />
          <Route path="/resorts/create" element={<ResortCreate
            onResortCreateSubmit={onResortCreateSubmit}
          />} />
          <Route path="/resorts/create-price" element={<PriceCreate
            onPriceCreateSubmit={onPriceCreateSubmit}
          />} />
        </Routes>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
