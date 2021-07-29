import React from 'react';
import styles from './Footer.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Links} from '../Links/Links';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styleContainer.container}>
                <div className={`${styleContainer.row} ${styles.row}`}>
                    <div className={styles.item}>

                    </div>
                    <div className={`${styleContainer.itemsContainer} ${styles.container} ${styles.item}`}>
                        <Links/>
                    </div>
                    <p className={`${styles.item} ${styles.rights}`}>© 2021. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}