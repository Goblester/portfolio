import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './UpButton.module.scss';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../n1-main/m2-BLL/Store';
import {Link} from 'react-scroll';


export const UpButton = () => {

    const showButton = useSelector<AppStoreType, boolean>(state=>state.app.scrollBelow);

    if(!showButton){
        return (
            <>
            </>
        )
    }

    return (
        <Link to={'home'} duration={500} offset={1} className={styles.button} smooth={true}>
            <FontAwesomeIcon icon={faArrowUp} className={styles.path}/>
        </Link>
    )
}