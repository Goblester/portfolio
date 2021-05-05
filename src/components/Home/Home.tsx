import styles from './Home.module.css';
import styleContainer from './../../common/styles/styleContainer.module.css';

export function Home(){
    return(
        <section className={styles.home}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styles.description}>
                    <span>FRONT-END DEVELOPER</span>
                    <h1>Hello, i'm <span>Daniil</span><br/> Welcome to my page.</h1>
                </div>
                <div className={styles.photo}></div>
            </div>
        </section>
    )
}