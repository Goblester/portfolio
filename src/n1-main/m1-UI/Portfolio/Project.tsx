import styles from './Portfolio.module.scss';
import {Fade} from 'react-awesome-reveal';

export function Project({title, description, backgroundImage, codeLink, demoLink}: {
    title: string
    description: string
    backgroundImage: string
    codeLink: string
    demoLink: string
}) {
    return (
        <div className={styles.itemContainer}>

            <div className={styles.project}>
                <Fade triggerOnce={true}>
                    <div className={styles.thumbnailInner}>
                        <div className={styles.thumbnailImage} style={{backgroundImage: `url(${backgroundImage})`}}>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.inner}>
                            <p>
                                <span>{description}</span>
                            </p>
                            <h4><a>{title}</a></h4>
                            <div className={styles.button}><a href={demoLink} className={styles.rnBtn}>VIEW DEMO</a>
                            </div>
                            <div className={styles.button}><a href={codeLink} className={styles.rnBtn}>VIEW CODE</a>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>

        </div>
    )
}