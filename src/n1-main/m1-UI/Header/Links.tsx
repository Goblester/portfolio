import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubAlt, faLinkedinIn, faTelegramPlane, faVk} from '@fortawesome/free-brands-svg-icons';
import {faFileCode} from '@fortawesome/free-regular-svg-icons';
import React from 'react';


export const Links = () => {

    return(
        <>
            <a href=""><FontAwesomeIcon icon={faLinkedinIn}/>
            </a>
            <a href=""><FontAwesomeIcon icon={faGithubAlt}/></a>
            <a href=""><FontAwesomeIcon icon={faVk}/></a>
            <a href=""><FontAwesomeIcon icon={faTelegramPlane}/></a>
            <a href=""><FontAwesomeIcon icon={faFileCode}/></a>
        </>
    )
}