import styles from './Skills.module.scss';



export function Skill({title, description, logo}: {
    title: string
    logo: string
    description: string
}) {
    return (
        <a href={''}>
            <div className={styles.item}>
                <img src={logo} className={styles.logo} alt=''/>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    )
}