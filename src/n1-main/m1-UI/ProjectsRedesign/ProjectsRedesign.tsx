import sCon from './../common/styles/styleContainer.module.scss';
import s from './ProjectRedesign.module.scss';


export const ProjectsRedesign = () => {

    return (
        <section>
            <ul className={sCon.container}>
                <li className={s.project}>
                    <h4 className={s.projectName}>Fabric</h4>
                    <p className={s.projectDescription}>Design development</p>
                </li>
            </ul>
        </section>
    )
}