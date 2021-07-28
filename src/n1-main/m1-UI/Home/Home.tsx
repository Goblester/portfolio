import styles from './Home.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Header} from '../Header/Header';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {changeScrollBelow} from '../../m2-BLL/appReducer';

export function Home() {
    const dispatch = useDispatch();

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
        <section className={styles.home} id={'home'}>
            <Header/>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styleContainer.row}>
                    <div className={styleContainer.col12}>
                        <div className ={styles.innerText}>
                            <span className={styles.jobPosition}>FRONT-END DEVELOPER</span>
                            <h1>Hello, i'm <span>Daniil</span> Welcome to my page.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}