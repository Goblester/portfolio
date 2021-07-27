import styles from './Portfolio.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Project} from './Project';
import {Title} from '../common/Title/Title';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-BLL/Store';
import {ProjectType} from '../../m2-BLL/Projects';

export function Portfolio() {

    const projects = useSelector<AppStoreType, Array<ProjectType>>(state => state.projects);

    return (
        <section className={styles.portfolio}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                    <Title title={'My Latest Projects'}/>
                    <div className={styles.container}>
                        <div className={styleContainer.itemsContainer}>
                            {
                                projects.map(pr => <Project title={pr.title}
                                                            description={pr.description}
                                                            backgroundImage={pr.backgroundImage}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}