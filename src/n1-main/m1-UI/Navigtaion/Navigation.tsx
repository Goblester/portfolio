import React, {useState} from 'react';
import styles from './Navigation.module.scss';
import Scrollspy from 'react-scrollspy';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-scroll';

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
            <Scrollspy items={['home', 'skills', 'projects', 'contact']}
                       currentClassName={styles.active}
                       className={`${styles.navigation} ${showMenu ? styles.right : ''}`}>
                <li><Link to={'home'} onClick={onCloseClick} offset={1} smooth={true} duration={500}>Home</Link></li>
                <li><Link to={'skills'} onClick={onCloseClick} offset={1} smooth={true} duration={500}>Skills</Link></li>
                <li><Link to={'projects'} onClick={onCloseClick} offset={1} smooth={true} duration={500}>Projects</Link></li>
                <li><Link to={'contact'} onClick={onCloseClick} offset={1} smooth={true} duration={500}>Contacts</Link></li>
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