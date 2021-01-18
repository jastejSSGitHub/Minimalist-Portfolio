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
import GoreDrawing from './GraphicsPage/GoreDrawing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  AOS.init();
  
  useEffect(() => {
    document.title = "Jastej Sehra Portfolio"
 }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/abc" component={GoreDrawing}>
              <GoreDrawing/>
          </Route>
          <Route path="/">
            <Tabs />
            <Footer/>
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
