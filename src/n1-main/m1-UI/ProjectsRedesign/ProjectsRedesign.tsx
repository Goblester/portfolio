import {useEffect, useRef, useState} from "react";
import sCon from './../common/styles/styleContainer.module.scss';
import s from './ProjectRedesign.module.scss';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../m2-BLL/Store";
import {ProjectType} from "../../m2-BLL/projectsReducer";
import {MouseTooltip} from "../MouseTooltip/MouseTooltip";
import classNames from "classnames";
import {useMotionValue, useSpring} from "framer-motion";


export const ProjectsRedesign = () => {
    const ref = useRef<HTMLUListElement | null>(null);
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

    const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
    const projects = useSelector((state: AppStoreType) => state.projects);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };
        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    useEffect(() => {
        const updateScroll = () => {
            // @ts-ignore
            const {height, width, top, left} = ref.current?.getBoundingClientRect() as any;
            const mousePosition = {x: x.get(), y: y.get()};

            if (top + height < mousePosition.y
                || top > mousePosition.y
                || width + left < mousePosition.x
                || left > mousePosition.x) {
                setCurrentProject(null);
                return;
            } else {
                const childrenHeight = ref.current?.children[0]?.clientHeight || 0;
                const index = Math.floor((mousePosition.y - top)  / childrenHeight);
                console.log(index);
                setCurrentProject(projects[index])
            }
        };
        window.addEventListener('scroll', updateScroll);
        return () => window.removeEventListener('scroll', updateScroll);
    }, [projects]);

    return (
        <section>
            <ul ref={ref} className={sCon.container}>
                {projects.map((project, index) => (
                    <li data-project={index}
                        className={classNames(s.project, {[s.projectHovered]: currentProject?.title === project.title})}
                        onMouseEnter={() => setCurrentProject(project)}
                        key={project.title}>
                        <h4 className={s.projectName}>{project.title}</h4>
                        <p className={s.projectDescription}>{project.description}</p>
                    </li>
                ))}
            </ul>
            {currentProject && <MouseTooltip x={x} y={y}/>}
        </section>
    )
}