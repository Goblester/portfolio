import React from 'react';
import './App.scss';
import {Home} from './n1-main/m1-UI/Home/Home';
import {Skills} from './n1-main/m1-UI/Skills/Skills';
import {Portfolio} from './n1-main/m1-UI/Portfolio/Portfolio';
import {Contact} from './n1-main/m1-UI/Contact/Contact';
import {Footer} from './n1-main/m1-UI/Footer/Footer';
import {UpButton} from './n2-features/modalButton/UpButton';




function App() {



    return (
        <div className="App">
            <Home/>
            <Skills/>
            <Portfolio/>
            <Contact/>
            <Footer/>
            <UpButton/>
        </div>
    );
}

export default App;
