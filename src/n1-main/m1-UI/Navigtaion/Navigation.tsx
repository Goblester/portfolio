import React, {useState} from 'react';
import styles from './Navigation.module.scss';
import Scrollspy from 'react-scrollspy';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

export function Navigation() {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const onShowClick = () => {
        setShowMenu(true);
    }
    const onCloseClick = () => {
        setShowMenu(false);
    }

    return (
        <div className={styles.navigationWrapper}>
            <FontAwesomeIcon icon={faBars} className={styles.bars} onClick={onShowClick}/>
            <Scrollspy items={['home', 'skills', 'portfolio', 'contact']}
                       currentClassName={styles.active}
                       className={`${styles.navigation} ${showMenu ? styles.right : ''}`}>
                <li><a href="#home" onClick={onCloseClick}>Home</a></li>
                <li><a href="#skills" onClick={onCloseClick}>Skills</a></li>
                <li><a href="#portfolio" onClick={onCloseClick}>Portfolio</a></li>
                <li><a href="#contact" onClick={onCloseClick}>Contact</a></li>
                {showMenu &&
                <div className={styles.close}>
                    <FontAwesomeIcon icon={faTimes} onClick={onCloseClick} className={styles.times}/>
                </div>}
            </Scrollspy>
            {showMenu && <div className={styles.wrapScreen} onClick={onCloseClick}>
            </div>}
        </div>
    )
}