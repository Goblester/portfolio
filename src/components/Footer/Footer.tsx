import React from 'react';
import styles from './Footer.module.css';
import styleContainer from './../../common/styles/styleContainer.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                    <h3>Daniil Ogloblin</h3>
                    <div className={`${styleContainer.itemsContainer} ${styles.container}`}>
                        <a href="">Linkedin</a>
                        <a href="">GitHub</a>
                        <a href="">Vkontakte</a>
                        <a href="">Telegram</a>
                        <a href="">CodeWars</a>
                    </div>
                    <p>© 2021. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}