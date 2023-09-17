import React, {useEffect} from 'react';
import './App.scss';
import {Home} from './n1-main/m1-UI/Home/Home';
import {Skills} from './n1-main/m1-UI/Skills/Skills';
import {Projects} from './n1-main/m1-UI/Portfolio/Projects';
import {Contact} from './n1-main/m1-UI/Contact/Contact';
import {Footer} from './n1-main/m1-UI/Footer/Footer';
import {UpButton} from './n2-features/modalButton/UpButton';
import {useDispatch, useSelector} from 'react-redux';
import {changeScrollBelow, StatusType} from './n1-main/m2-BLL/appReducer';
import {AppStoreType} from './n1-main/m2-BLL/Store';
import {SnackBar} from './n2-features/ErrorSnackback/SnackBar';
import {Header} from "./n1-main/m1-UI/Header/Header";
import {Quote} from "./n1-main/m1-UI/Quote/Quote";
import {MouseTooltip} from "./n1-main/m1-UI/MouseTooltip/MouseTooltip";




function App() {
    const dispatch = useDispatch();
    const status = useSelector<AppStoreType, StatusType>(state=>state.app.status);


    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 300) {
                dispatch(changeScrollBelow(true))
            } else {
                dispatch(changeScrollBelow(false))
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="App">
            <Header/>
            <Home/>
            <Quote />
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <UpButton/>
            {status !== 'idle'&&<SnackBar/>}
            {/*<MouseTooltip/>*/}
        </div>
    );
}

export default App;
