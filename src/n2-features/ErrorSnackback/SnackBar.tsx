import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeAppStatus, StatusType} from '../../n1-main/m2-BLL/appReducer';
import styles from './SnackBar.module.scss';
import {AppStoreType} from '../../n1-main/m2-BLL/Store';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons'

export const SnackBar: React.FC = () => {
    const dispatch = useDispatch();
    const status = useSelector<AppStoreType, StatusType>(state => state.app.status);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(changeAppStatus('idle'));
        }, 6000)
        return () => {
            clearTimeout(timeoutId);
        }
    }, [status])

    let message;
    const onCloseClick = () => {
        dispatch(changeAppStatus('idle'))
    }
    switch (status) {
        case 'loading':
            message = <span>loading<ReactTypingEffect typingDelay={100}
                                                      eraseDelay={1000}
                                                      speed={300}
                                                      cursor={undefined} text={'...'}/></span>
            break;
        case 'success':
            message = <span>Thanks for contacting me!</span>
            break;
        case 'fail':
            message = <span>Something went wrong. Please try again</span>
    }
    return (
        <div className={styles.container}>
            {message}
            <div onClick={onCloseClick} className={styles.close}><FontAwesomeIcon icon={faTimes}/></div>
        </div>

    )
}