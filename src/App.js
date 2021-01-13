import React from 'react';
import './App.css';
import Container from './Container';
import Tabs from './Tabs';
import { useEffect } from 'react';
import ScriptTag from 'react-script-tag';
import {Helmet} from "react-helmet";
import Footer from './Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  AOS.init();
  
  useEffect(() => {
    document.title = "Jastej Sehra Portfolio"
 }, []);
  return (
    
    <div className="app">
      <Tabs />
      
      <Footer/>
    </div>
  );
}

export default App;
