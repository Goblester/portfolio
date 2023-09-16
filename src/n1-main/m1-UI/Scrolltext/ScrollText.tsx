import React, {useRef} from "react";
import s from "./ScrollText.module.scss";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity, wrap
} from "framer-motion";

export const ScrollText: React.FC = () => {

    const baseX = useMotionValue(0)
    const {scrollY} = useScroll()

    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * 3 * (delta / 1000);


        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <motion.div style={{x}}
                    className={s.title}>
            <span className={s.name}>Daniil Ogloblin&nbsp;—&nbsp;</span>
            <span className={s.name}>Daniil Ogloblin&nbsp;—&nbsp;</span>
        </motion.div>
    )
}