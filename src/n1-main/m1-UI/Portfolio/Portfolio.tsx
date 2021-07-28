import styles from './Portfolio.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Project} from './Project';
import {Title} from '../common/Title/Title';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-BLL/Store';
import {ProjectType} from '../../m2-BLL/projectsReducer';

export function Portfolio() {

    const projects = useSelector<AppStoreType, Array<ProjectType>>(state => state.projects);

    return (
        <section className={styles.portfolio} id={'portfolio'}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                    <Title title={'My Latest Projects'} description={'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'}/>

                    <div className={`${styleContainer.itemsContainer} ${styles.container}`}>
                        {
                            projects.map((pr,ind) => <Project key={pr.title+ind}
                                                        title={pr.title}
                                                        description={pr.description}
                                                        backgroundImage={pr.backgroundImage}/>)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}