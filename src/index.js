import React from "react";
import { createRoot } from "react-dom/client";
import mainLogo from './images/fedgen-logo.png';
import nextlogo from './images/Capicace-logo.png';

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
import DataHub from "./routes/DataHub";
import FedSec from "./routes/FedSec";
import CloudRAN from "./routes/CloudRAN";
import EDGEAI from "./routes/EDGE_AI";

const AppLayout = () => (
  <>

    <div className="navigate" style={{ display: 'flex', alignItems: 'center' }}>
      <a href="https://fedgen.net/" target="_blank">
        <img src={mainLogo} alt="Main Logo" style={{ width: '83px', maxHeight: '80px', maxWidth: '200%' }} />
      </a>

      <a href="https://ace.covenantuniversity.edu.ng/" target="_blank">
        <img src={nextlogo} alt="Next Logo" style={{ width: '30px', maxHeight: '29px', maxWidth: '200%', marginLeft: '10px' }} />
      </a>
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
        <Route path="Datahub" element={<DataHub />} />
        <Route path="FedSec" element={<FedSec />} />
        <Route path="CloudRAN" element={<CloudRAN />} />
        <Route path="EDGEAI" element={<EDGEAI />} />

      </Route>
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(<App />);

