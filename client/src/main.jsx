import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Route,Routes } from "react-router-dom";
import Contact from './components/Contact';
import Qanswer from './components/Qanswer';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/qanswer" element={<Qanswer/>}/>
    </Routes>
  </BrowserRouter>,
)
