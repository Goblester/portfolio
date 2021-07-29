import styles from './Skills.module.scss';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Skill} from './Skill';
import {Title} from '../common/Title/Title';
import {useSelector} from 'react-redux';
import {AppStoreType} from '../../m2-BLL/Store';
import {SkillType} from '../../m2-BLL/skillsReducer';


export function Skills() {
    const skills = useSelector<AppStoreType, Array<SkillType>>(state => state.skills);
    return (
        <section className={styles.skills} id={'skills'}>
            <div className={styleContainer.container}>

                <Title title={'My Skills'}
                       description={'I used these following developer technologies:'}/>
                <div className={styleContainer.row}>
                    {
                        skills.map((sk, ind) => {
                            return <Skill key={sk.title + ind}
                                          title={sk.title}
                                          logo={sk.logo}
                                          description={sk.description}/>
                        })
                    }
                </div>

            </div>
        </section>
    )
}