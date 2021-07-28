import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithubAlt} from '@fortawesome/free-brands-svg-icons';
import {faVk} from '@fortawesome/free-brands-svg-icons';
import {faTelegramPlane} from '@fortawesome/free-brands-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styleContainer.container}>
                <div className={`${styleContainer.row} ${styles.row}`}>
                    <div className={styles.item}>

                    </div>
                    <div className={`${styleContainer.itemsContainer} ${styles.container} ${styles.item}`}>
                        <a href=""><FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                        <a href=""><FontAwesomeIcon icon={faGithubAlt}/></a>
                        <a href=""><FontAwesomeIcon icon={faVk}/></a>
                        <a href=""><FontAwesomeIcon icon={faTelegramPlane}/></a>
                        <a href=""><FontAwesomeIcon icon={faFileCode}/></a>
                    </div>
                    <p className={`${styles.item} ${styles.rights}`}>© 2021. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}