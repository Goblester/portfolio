import styles from './Home.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Header} from '../Header/Header';
import ReactTypingEffect from 'react-typing-effect';

export function Home() {


    return (
        <section className={styles.home} id={'home'}>
            <Header/>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <div className={styleContainer.row}>
                    <div className={styleContainer.col12}>
                        <div className={styles.innerText}>

                            <span className={styles.jobPosition}>
                                <ReactTypingEffect text={'FRONT-END DEVELOPER'}/>
                            </span>
                            <h1>Hello, i'm <span>Daniil</span> Welcome to my page.</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}