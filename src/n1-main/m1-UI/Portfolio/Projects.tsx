import styles from './Portfolio.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Project} from './Project';
import {Title} from '../common/Title/Title';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-BLL/Store';
import {ProjectType} from '../../m2-BLL/projectsReducer';

export function Projects() {

    const projects = useSelector<AppStoreType, Array<ProjectType>>(state => state.projects);

    return (
        <section className={styles.portfolio} id={'projects'}>
            <div className={styleContainer.container}>
                <div className={styles.secondContainer}>
                    <Title title={'My Latest Projects'}
                           description={'I\'ve taken part in creating learning app,developed login page, modal windows, tests, menu, and design'}/>

                    <div className={styles.container}>
                        {
                            projects.map((pr) =>
                                <Project
                                    key={pr.title}
                                    title={pr.title}
                                    description={pr.description}
                                    backgroundImage={pr.backgroundImage}
                                    codeLink={pr.codeLink}
                                    demoLink={pr.demoLink}
                                />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}