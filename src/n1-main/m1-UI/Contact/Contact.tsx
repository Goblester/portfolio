import styles from './Contact.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Title} from '../common/Title/Title';
import photo from './../../../assets/photo/about-9.jpg'

export function Contact() {
    return (
        <section className={styles.contact} id={'contact'}>
            <div className={styleContainer.container}>
                <div className={`${styleContainer.row} ${styles.row}`}>
                    <div className={`${styles.col} ${styles.order2}`}>
                        <div className={styles.info}>
                            <h2>Contact Me</h2>
                            <p>I am available for distant work. Connect with me via phone: <span>+7-911-111-11-11</span> or
                                email: <span>admin@example.com</span></p>
                        </div>
                        <form className={styles.formContainer}>
                            <input className={styles.inputForm} name={'your-name'} placeholder={'Your Name *'}/>
                            <input className={styles.inputForm} name={'your-email'} placeholder={'Your Email *'}/>
                            <textarea className={`${styles.inputForm} ${styles.textAreaForm}`} name={'your-message'}
                                      placeholder={'Your Message'} cols={40} rows={10}/>
                            <button type={'submit'} className={styles.button}>SEND MESSAGE</button>
                        </form>
                    </div>
                    <div className={`${styles.col} ${styles.order1}`}>
                        <div className={styles.photo}>
                            <img src={photo} alt={''}/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}