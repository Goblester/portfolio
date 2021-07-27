import React from 'react';
import styles from './Title.module.scss'

export const Title: React.FC<TitleProps> = ({title, description}:{
    title: string
    description: string
}) => {
    return (
        <h2 className={styles.title}>{title}</h2>
    )
}