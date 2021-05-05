import React from 'react';
import styles from './Navigation.module.css';

export function Navigation(){
    return(
        <div className={styles.navigation}>
            <a href="">Home</a>
            <a href="">Skills</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
        </div>
    )
}