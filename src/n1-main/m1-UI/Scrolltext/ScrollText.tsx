import React from "react";
import s from "./ScrollText.module.scss";
import {motion} from "framer-motion";

export const ScrollText: React.FC = () => {

    return (
        <motion.div  animate={{x: [null, '-50%']}} transition={{duration: 30, repeat: Infinity}} className={s.title}>
            <h1>Daniil Ogloblin&nbsp;—&nbsp;</h1>
            <h1>Daniil Ogloblin&nbsp;—&nbsp;</h1>
        </motion.div>
    )
}