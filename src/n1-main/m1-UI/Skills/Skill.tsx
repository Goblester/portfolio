import styles from './Skills.module.scss';


export function Skill({title, description, logo}: {
    title: string
    logo: string
    description: string
}) {
    return (
        <div className={styles.itemContainer}>
            <div className={styles.item}>
                <a href={''}>
                    <img src={logo} className={styles.logo} alt=""/>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </a>
            </div>
        </div>
    )
}