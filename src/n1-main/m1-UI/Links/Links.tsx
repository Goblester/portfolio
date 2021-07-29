import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubAlt, faLinkedinIn, faTelegramPlane, faVk} from '@fortawesome/free-brands-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
import { Link } from 'react-scroll';


export const Links = () => {

    return(
        <>
            <a href='https://www.linkedin.com/in/daniil-ogloblin/'><FontAwesomeIcon icon={faLinkedinIn}/></a>
            <a href="https://github.com/Goblester"><FontAwesomeIcon icon={faGithubAlt}/></a>
            <a href="https://www.codewars.com/users/Goblester"><FontAwesomeIcon icon={faFileCode}/></a>
            <a href="https://t.me/Daniil_Ogloblin"><FontAwesomeIcon icon={faTelegramPlane}/></a>
            <a href="https://vk.com/goblester"><FontAwesomeIcon icon={faVk}/></a>
        </>
    )
}