import styles from './Portfolio.module.css';

export function Project({title, skill}: {
    title: string
    skill: string
}) {
    return (
        <a href={''}>
            <div className={styles.item}>
                <div className={styles.itemContentContainer}>
                    <span>{skill}</span>
                    <h3>{title}</h3>
                    <div>GET LOOK</div>
                </div>
            </div>
        </a>
    )
}