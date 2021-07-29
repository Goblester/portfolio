import styles from './Contact.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import photo from './../../../assets/photo/photo-1.jpg';
import {Fade} from 'react-awesome-reveal';

export function Contact() {
    return (
        <section className={styles.contact} id={'contact'}>
            <div className={styleContainer.container}>
                <div className={`${styleContainer.row} ${styles.row}`}>
                    <div className={`${styles.itemContainer} ${styles.order2}`}>
                        <Fade triggerOnce={true}>
                            <div className={styles.info}>
                                <h2>Contact Me</h2>
                                <p>I am available for distant work. Connect with me via
                                    phone: <span>+7-981-113-27-79</span> or
                                    email: <span>ogloblin.daniil@yandex.ru</span></p>
                            </div>
                            <form className={styles.formContainer}>
                                <input className={styles.inputForm} name={'your-name'} placeholder={'Your Name *'}/>
                                <input className={styles.inputForm} name={'your-email'} placeholder={'Your Email *'}/>
                                <textarea className={`${styles.inputForm} ${styles.textAreaForm}`} name={'your-message'}
                                          placeholder={'Your Message'} cols={40} rows={10}/>
                                <button type={'submit'} className={styles.button}>SEND MESSAGE</button>
                            </form>
                        </Fade>
                    </div>

                    <div className={`${styles.itemContainer} ${styles.order1}`}>
                        <Fade triggerOnce={true}>
                            <div className={styles.photo}>
                                <img src={photo} alt={''}/>
                            </div>
                        </Fade>
                    </div>
                </div>

            </div>
        </section>
    )
}