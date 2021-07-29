import styles from './Skills.module.scss';
import stContainer from './../common/styles/styleContainer.module.scss';
import {Fade} from 'react-awesome-reveal';

export function Skill({title, description, logo}: {
    title: string
    logo: string
    description: string
}) {
    return (
        <div className={stContainer.flexItem}>
            <Fade triggerOnce={true}>
                <div className={styles.itemContainer}>
                    <a href={'#top'}>
                        <div className={styles.service}>
                            <img src={logo} className={styles.logo} alt=""/>
                            <div className={styles.content}>
                                <h3>{title}</h3>
                                <p>{description}</p>
                            </div>
                        </div>

                    </a>
                </div>
            </Fade>
        </div>

    )
}