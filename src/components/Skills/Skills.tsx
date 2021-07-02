import styles from './Skills.module.css';
import styleContainer from '../../common/styles/styleContainer.module.scss';
import {Skill} from './Skill';

export function Skills() {
    return (
        <section className={styles.skills}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                    <h2>Skills</h2>
                    <div className={styleContainer.itemsContainer}>
                        <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore' +
                        ' magna aliqua. Ut enim ad minim veniam'}/>
                        <Skill title={'React'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                               'sed do eiusmod tempor incididunt ut labore et dolore' +
                               ' magna aliqua. Ut enim ad minim veniam'}/>
                        <Skill title={'Redux'}
                               description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                               'sed do eiusmod tempor incididunt ut labore et dolore' +
                               ' magna aliqua. Ut enim ad minim veniam'}/>
                        <Skill title={'HTML'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore' +
                        ' magna aliqua. Ut enim ad minim veniam'}/>
                        <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore' +
                        ' magna aliqua. Ut enim ad minim veniam'}/>
                        <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
                        'sed do eiusmod tempor incididunt ut labore et dolore' +
                        ' magna aliqua. Ut enim ad minim veniam'}/>

                    </div>
                </div>
            </div>
        </section>
    )
}