import styles from './Portfolio.module.scss';

export function Project({title, description, backgroundImage}: {
    title: string
    description: string
    backgroundImage: string
}) {
    return (
        <div className={styles.item}>
            <div className={styles.project}>
                <div className={styles.thumbnailInner}>
                    <div className={styles.thumbnailImage} style={{backgroundImage: `url(${backgroundImage})`}}>
                    </div>
                    <div className={styles.blrThumbnailImage} style={{backgroundImage: `url(${backgroundImage})`}}>

                    </div>

                </div>
                <div className={styles.content}>
                    <div className={styles.inner}>
                        <p>
                            <span>{description}</span>
                        </p>
                        <h4><a>{title}</a></h4>
                        <div className={styles.button}><a href={''} className={styles.rnBtn}>VIEW DEMO</a></div>
                        <div className={styles.button}><a href={''} className={styles.rnBtn}>VIEW CODE</a></div>
                    </div>
                </div>
                <a href={''}></a>
            </div>

        </div>
    )
}