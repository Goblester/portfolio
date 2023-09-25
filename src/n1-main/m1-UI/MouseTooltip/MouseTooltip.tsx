import {AnimatePresence, motion, MotionValue, useTransform, useVelocity} from "framer-motion";
import React from "react";
import {ProjectType} from "../../m2-BLL/projectsReducer";
import s from './style.module.scss';

type PropsType = {
    x: MotionValue<number>;
    y: MotionValue<number>;
    currentProject: ProjectType | null
}

export const MouseTooltip: React.FC<PropsType> = ({x, y, currentProject}) => {

    // const [project, setProject] = useState(currentProject);
    const velX = useVelocity(x)
    const velY = useVelocity(y)

    const textX = useTransform(velX, (latest) => latest / 1000 * 10);
    const textY = useTransform(velY, (latest) => latest / 1000 * 10);


    return <AnimatePresence>
        {currentProject &&
            <motion.div key="modal"
                        initial={{scale: 0}}
                        animate={{scale: 1}}
                        exit={{scale: 0}}
                        className={s.container}
                        transition={{type: "tween"}}
                        style={{x, y}}>
                <div className={s.viewCircle}>
                    <motion.span className={s.text} style={{y: textY, x: textX}}>
                        View
                    </motion.span>
                </div>
                <div className={s.overlayContainer}>
                    <AnimatePresence>
                        <motion.div key={currentProject.title}
                                    initial={{y: '-100%'}}
                                    animate={{y: 0}}
                                    exit={{y: '100%'}}
                                    transition={{duration: 2}}
                                    className={s.overlay}>
                            <div className={s.imgContainer}>
                                <img src={currentProject.backgroundImage}/>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>}
    </AnimatePresence>
}