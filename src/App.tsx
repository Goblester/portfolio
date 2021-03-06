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




function App() {
    const dispatch = useDispatch();
    const status = useSelector<AppStoreType, StatusType>(state=>state.app.status);


    const handleScroll = () => {
        if (window.pageYOffset > 300) {
            dispatch(changeScrollBelow(true))
        } else {
            dispatch(changeScrollBelow(false))
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className="App">
            <Home/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
            <UpButton/>
            {status !== 'idle'&&<SnackBar/>}
        </div>
    );
}

export default App;
