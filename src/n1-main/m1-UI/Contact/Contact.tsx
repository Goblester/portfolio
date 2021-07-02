import styles from './Contact.module.css';
import styleContainer from '../common/styles/styleContainer.module.scss';

export function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                <h2>Contact Me</h2>
                <p>I am available for distant work. Connect with me via phone: <span>+7-911-111-11-11</span> or email: <span>admin@example.com</span></p>
                <form className={styles.formContainer}>
                    <input className={styles.inputForm} name={'your-name'} placeholder={'Your Name *'}/>
                    <input  className={styles.inputForm} name={'your-email'} placeholder={'Your Email *'}/>
                    <textarea className={`${styles.inputForm} ${styles.textAreaForm}`} name={'your-message'} placeholder={'Your Message'} cols={40} rows={10}/>
                    <button type={'submit'} className={styles.button}>SEND MESSAGE</button>
                </form>
                </div>
            </div>
        </section>
    )
}