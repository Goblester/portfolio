import styles from './Portfolio.module.css';
import styleContainer from '../common/styles/styleContainer.module.scss';
import {Project} from './Project';
import {Title} from '../common/Title/Title';

export function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                <Title title={'My Latest Projects'}/>
                <div className={styleContainer.itemsContainer}>
                    <Project title={'Social website'} skill={'Website Devqelopment'}/>
                    <Project title={'Social website'} skill={'Website Development'}/>
                    <Project title={'Social website'} skill={'Website Development'}/>
                    <Project title={'Social website'} skill={'Website Development'}/>
                    <Project title={'Social website'} skill={'Website Development'}/>
                    <Project title={'Social website'} skill={'Website Development'}/>
                </div>
                </div>
            </div>
        </section>
    )
}