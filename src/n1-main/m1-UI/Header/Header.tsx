import React from 'react';
import { Navigation } from '../Navigtaion/Navigation';
import styles from './Header.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';

export function Header(){
    return(
        <header className={styles.header}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Navigation/>
            </div>
        </header>
    )
}