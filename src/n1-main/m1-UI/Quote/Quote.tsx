import React from "react";
import {useScroll, useTransform, motion} from "framer-motion";
import s from './Quote.module.scss';


export const Quote: React.FC = () => {
    const {scrollYProgress} = useScroll()
    const stroke = useTransform(scrollYProgress, [0.05, 0.20], [1000, 0])
    const rightX = useTransform(scrollYProgress, [0.05, 0.20], [240, 300])
    const leftX = useTransform(scrollYProgress, [0.05, 0.20], [-100, -160])

    return (
        <section className={s.container}>
            <blockquote className={s.quoteTextWrap}>
                <svg x="0" y="0" viewBox="0 0 591.7 313.3">
                    <motion.polyline className={s.quoteHeart}
                                     points="191.9,118.2 128,7.3 463.8,7.3 295.9,298 233.2,189.5"
                                     style={{strokeDashoffset: stroke}}></motion.polyline>
                    <rect x="110" y="112.9" className={s.quoteTextBG} width="93" height="82"></rect>
                    <rect x="370" y="43.9" className={s.quoteTextBG} width="93" height="82"></rect>
                    <motion.text y="109.9107" style={{x: rightX}} className={s.quoteText}>“DO WHAT YOU LOVE</motion.text>
                    <motion.text y="179.7315" style={{x: leftX}} className={s.quoteText}>LOVE WHAT YOU DO”</motion.text>
                </svg>
            </blockquote>
        </section>
    )
}