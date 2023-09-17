import {useMotionValue, motion, useSpring, useTransform, useVelocity} from "framer-motion";
import React, {useEffect} from "react";
import s from './style.module.scss';

export const MouseTooltip: React.FC = () => {

    const baseX = useMotionValue(0);
    const baseY = useMotionValue(0);

    const x = useSpring(baseX, {
        damping: 50,
        stiffness: 400
    });
    const y = useSpring(baseY, {
        damping: 50,
        stiffness: 400
    });

    const velX = useVelocity(x)
    const velY = useVelocity(y)

    const textX = useTransform(velX, (latest) => latest/1000 * 10);
    const textY = useTransform(velY, (latest) => latest/1000 * 10);


    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);


    return (
        <motion.div className={s.container} transition={{type: "tween"}} style={{x, y}}>
            <motion.span className={s.text} style={{y: textY, x: textX}}>
                View
            </motion.span>
        </motion.div>
    );
}