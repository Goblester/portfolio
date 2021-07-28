import React from 'react';
import styles from './Navigation.module.scss';
import Scrollspy from 'react-scrollspy';

export function Navigation() {
    return (

        <Scrollspy items={['home', 'skills', 'portfolio', 'contact']} currentClassName={styles.active} className={styles.navigation}>
                <li ><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
        </Scrollspy>
    )
}