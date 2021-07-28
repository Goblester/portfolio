import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './UpButton.module.scss';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../n1-main/m2-BLL/Store';


export const UpButton = () => {

    const showButton = useSelector<AppStoreType, boolean>(state=>state.app.scrollBelow);

    if(!showButton){
        return (
            <>
            </>
        )
    }

    return (
        <a href={'#top'} className={styles.button}>
            <FontAwesomeIcon icon={faArrowUp} className={styles.path}/>
        </a>
    )
}