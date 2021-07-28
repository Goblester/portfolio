import React, {useEffect, useState} from 'react';
import {Navigation} from '../Navigtaion/Navigation';
import styles from './Header.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Links} from './Links';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-BLL/Store';



export function Header() {

    const fixed = useSelector<AppStoreType,boolean>(state=>state.app.scrollBelow)

    return (
        <header className={`${styles.header} ${fixed?styles.fixed:styles.absolute}`}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <Navigation/>
                <div className={styles.links}>
                    <Links/>
                </div>
            </div>
        </header>
    )
}