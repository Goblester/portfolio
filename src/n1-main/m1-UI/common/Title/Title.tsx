import React from 'react';
import styles from './Title.module.scss'
import stContainer from './../../common/styles/styleContainer.module.scss';

type TitleProps = {
    title: string
    description: string
}

export const Title: React.FC<TitleProps> = ({title, description}: TitleProps) => {
    return (
        <div className={stContainer.row}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}