import {motion, MotionValue, useTransform, useVelocity} from "framer-motion";
import React from "react";
import s from './style.module.scss';

type PropsType = {
    x: MotionValue<number>;
    y: MotionValue<number>;
}

export const MouseTooltip: React.FC<PropsType> = ({x, y}) => {

    const velX = useVelocity(x)
    const velY = useVelocity(y)

    const textX = useTransform(velX, (latest) => latest/1000 * 10);
    const textY = useTransform(velY, (latest) => latest/1000 * 10);




    return (
        <motion.div className={s.container} transition={{type: "tween"}} style={{x, y}}>
            <motion.span className={s.text} style={{y: textY, x: textX}}>
                View
            </motion.span>
        </motion.div>
    );
}