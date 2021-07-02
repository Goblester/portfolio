import React from 'react';
import './App.scss';
import {Header} from './n1-main/m1-UI/Header/Header';
import {Home} from './n1-main/m1-UI/Home/Home';
import {Skills} from './n1-main/m1-UI/Skills/Skills';
import {Portfolio} from './n1-main/m1-UI/Portfolio/Portfolio';
import {Contact} from './n1-main/m1-UI/Contact/Contact';
import {Footer} from './n1-main/m1-UI/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
