import styles from './Portfolio.module.css';
import styleContainer from './../../common/styles/styleContainer.module.css';
import {Project} from './Project';

export function Portfolio() {
    return (
        <section className={styles.portfolio}>
            <div className={styleContainer.container}>
                <div className={styleContainer.secondContainer}>
                <h2>My Latest Projects</h2>
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