import React from 'react';
import { Navigation } from '../Navigtaion/Navigation';
import styles from './Header.module.css';
import styleContainer from './../../common/styles/styleContainer.module.css';

export function Header(){
    return(
        <header className={styles.header}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Navigation/>
            </div>
        </header>
    )
}