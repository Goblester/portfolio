import {AnimatePresence, motion, MotionValue, useTransform, useVelocity} from "framer-motion";
import React from "react";
import {ProjectType} from "../../m2-BLL/projectsReducer";
import s from './style.module.scss';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../m2-BLL/Store";

type PropsType = {
    x: MotionValue<number>;
    y: MotionValue<number>;
    currentProject: ProjectType | null
}

export const MouseTooltip: React.FC<PropsType> = ({x, y, currentProject}) => {

    const projects = useSelector((state: AppStoreType) => state.projects);


    const velX = useVelocity(x)
    const velY = useVelocity(y)

    const textX = useTransform(velX, (latest) => latest / 1000 * 10);
    const textY = useTransform(velY, (latest) => latest / 1000 * 10);

    const index = projects.findIndex(project => project.title === currentProject?.title)


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
                    <motion.a href={currentProject.demoLink} className={s.text} style={{y: textY, x: textX}}>
                        View
                    </motion.a>
                </div>
                <div className={s.overlayContainer}>
                    <motion.div className={s.slider}
                                initial={false}
                                animate={{y: -index * 440}}
                                transition={{duration: .35}}>
                        {projects.map(project => (
                            <div key={project.title}
                                 className={s.overlay}
                                 style={{backgroundColor: project.backgroundColor}}>
                                <div className={s.imgContainer}>
                                    <img src={project.backgroundImage} alt={project.title}/>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>}
    </AnimatePresence>
}