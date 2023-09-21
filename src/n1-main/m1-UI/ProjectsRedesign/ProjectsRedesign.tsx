import {useState} from "react";
import sCon from './../common/styles/styleContainer.module.scss';
import s from './ProjectRedesign.module.scss';
import {useSelector} from "react-redux";
import {AppStoreType} from "../../m2-BLL/Store";
import {ProjectType} from "../../m2-BLL/projectsReducer";
import {MouseTooltip} from "../MouseTooltip/MouseTooltip";
import classNames from "classnames";


export const ProjectsRedesign = () => {

    const [currentProject, setCurrentProject] = useState<ProjectType | null>(null);
    const projects = useSelector((state: AppStoreType) => state.projects);
    return (
        <section onMouseLeave={() => setCurrentProject(null)}>
            <ul className={sCon.container}>
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
            {currentProject && <MouseTooltip/>}
        </section>
    )
}