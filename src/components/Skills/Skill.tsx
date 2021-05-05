import styles from './Skills.module.css';

export function Skill({title, description}: {
    title: string
    description: string
}) {
    return (
        <a href={''}>
            <div className={styles.item}>
                <div className={styles.logo}></div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    )
}