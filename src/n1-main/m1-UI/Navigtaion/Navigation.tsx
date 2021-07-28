import React from 'react';
import styles from './Navigation.module.scss';

export function Navigation(){
    return(
        <div className={styles.navigation}>
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </div>
    )
}