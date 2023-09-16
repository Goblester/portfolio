import s from './Home.module.scss';
import {ScrollText} from "../Scrolltext/ScrollText";
import {MotionValue, useScroll, useTransform, motion} from "framer-motion";
import {ArrowIcon} from "../Icons/ArrowIcon";

type ParallaxOptionsType = {
    distance: number;
    maxScroll: number;
}
function useParallax(value: MotionValue<number>, {distance, maxScroll }: ParallaxOptionsType) {
    return useTransform(value, [0, maxScroll], [-distance, distance]);
}


export function Home() {
    const { scrollYProgress } = useScroll();
    const textY = useParallax(scrollYProgress, {maxScroll: 0.2 , distance: 150});
    const iconY = useParallax(scrollYProgress, {maxScroll: 0.2 , distance: 100});
    const rotate = useTransform(scrollYProgress, [0, 0.2], [45, 90])

    return (
        <main id="home" className={s.home}>
            <motion.div style={{y: iconY, rotate}} className={s.iconContainer}>
                <ArrowIcon color="#FFFFFF" size={40} />
            </motion.div>
            <motion.h1 className={s.title} style={{y: textY}}>Frontend Developer</motion.h1>
            <ScrollText />
        </main>
    )
}