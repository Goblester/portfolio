import styles from './Contact.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import photo from './../../../assets/photo/photo-1.jpg';
import {Fade} from 'react-awesome-reveal';
import {ChangeEvent, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {sendMessage, StatusType} from '../../m2-BLL/appReducer';
import {AppStoreType} from '../../m2-BLL/Store';

export function Contact() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const status = useSelector<AppStoreType, StatusType>(state => state.app.status);

    const disabledButton = status === 'loading';
    const buttonClassName = disabledButton?styles.disabledButton:styles.button;

    const onNameInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }
    const onMailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMail(e.currentTarget.value);
    }
    const onMessageTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.currentTarget.value);
    }

    const submitHandle = (e: any) => {
        e.preventDefault();
        dispatch(sendMessage({name, mail, message}));
    }

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
                            <form className={styles.formContainer} onSubmit={submitHandle}>
                                <input className={styles.inputForm}
                                       name={'name'}
                                       placeholder={'Your Name *'}
                                       value={name}
                                       onChange={onNameInputChange}/>
                                <input className={styles.inputForm}
                                       type={'email'}
                                       name={'email'}
                                       placeholder={'Your Email *'}
                                       value={mail}
                                       onChange={onMailInputChange}/>
                                <textarea className={`${styles.inputForm} ${styles.textAreaForm}`}
                                          name={'your-message'}
                                          placeholder={'Your Message'}
                                          cols={40}
                                          rows={10}
                                          value={message}
                                          onChange={onMessageTextAreaChange}/>
                                <button disabled={disabledButton} type={'submit'} className={buttonClassName}>SEND MESSAGE</button>
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