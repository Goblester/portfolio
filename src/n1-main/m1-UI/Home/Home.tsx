import s from './Home.module.scss';
import {ScrollText} from "../Scrolltext/ScrollText";

export function Home() {


    return (
        <main className={s.home} id={'home'}>
            <ScrollText />
        </main>
    )
}