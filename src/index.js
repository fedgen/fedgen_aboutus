import React from "react";
import { createRoot } from "react-dom/client";
import mainLogo from '../src/fedgen-logo.png';
import nextlogo from '../src/routes/Capicace-logo.png';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  HashRouter as Router,
  Link,
  Outlet,

  createRoutesFromElements,
} from "react-router-dom";

import Project from "./routes/Project";
import People from "./routes/People";
import UpcomingEvents from "./routes/UpcomingEvents";
import PublishedArticle from "./routes/PublishedArticle";
import Home from "./routes/Home";
import Navbar from "./components/Navbar";
import "./App.css";

const AppLayout = () => (
  <>

    <div className="navigate" style={{ display: 'flex', alignItems: 'center' }}>
      <img src={mainLogo} alt="Main Logo" style={{ width: '83px', maxHeight: '80px', maxWidth: '200%' }} />
      <img src={nextlogo} alt="Next Logo" style={{ width: '30px', maxHeight: '29px', maxWidth: '200%', marginLeft: '10px' }} />
      <Navbar />
    </div>
  

    <div className="navigate" style={{ display: 'flex', alignItems: 'center' }}>

    </div>

    <hr style={{ border: 'none', borderTop: '0.1px solid #f0f0f0', margin: '1px 0' }} />

    <Outlet />


  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="Project" element={<Project />} />
        <Route path="People" element={<People />} />
        <Route path="PublishedArticle" element={<PublishedArticle />} />
        <Route path="UpcomingEvents" element={<UpcomingEvents />} />
      </Route>
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(<App />);

