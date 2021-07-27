import styles from './Home.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';

export function Home() {
    return (
        <section className={styles.home}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styleContainer.row}>
                    <div className={styleContainer.col12}>
                        <div className ={styles.innerText}>
                            <span className={styles.jobPosition}>FRONT-END DEVELOPER</span>
                            <h1>Hello, i'm <span>Daniil</span> Welcome to my page.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}