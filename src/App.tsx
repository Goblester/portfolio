import React from 'react';
import './App.scss';
import {Header} from './components/Header/Header';
import {Home} from './components/Home/Home';
import {Skills} from './components/Skills/Skills';
import {Portfolio} from './components/Portfolio/Portfolio';
import {Contact} from './components/Contact/Contact';
import {Footer} from './components/Footer/Footer';

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
