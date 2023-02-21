import { useState } from "react"
import styles from './Header.module.scss';
import Logotipo from '../../assets/img/logotipo.svg';
import { Link, NavLink, Outlet } from "react-router-dom";
import { HiOutlineBars3BottomRight } from 'react-icons/hi2'

export const Header = () => {
    const [isHeaderOpen, setIsHeaderOpen] = useState(false);
    const date = new Date();
    const formatDate = (date, options) => new Intl.DateTimeFormat('pt-br', options || {}).format(date);
    
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }

    const longDate = formatDate(date, options); 
    const weekDay =  formatDate(date, { weekday: 'long' });
    const formattedWeekDay = weekDay.charAt(0).toUpperCase() + weekDay.slice(1, weekDay.length);

    return (
        <>
            <Outlet/>

            <div className={styles.date}>
                <p>
                    {formattedWeekDay}, {longDate}
                </p>
            </div>

            <div
                className={isHeaderOpen ? `${styles.menu} ${styles.active}` : styles.menu}
                onClick={() => setIsHeaderOpen(false)}
            >
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? styles.active : undefined}
                >
                    Treinos
                </NavLink>
                <NavLink
                    to="alimentacao"
                    className={({isActive}) => isActive ? styles.active : undefined}
                >
                    Alimentação
                </NavLink>
            </div>

            <header className={isHeaderOpen ? `${styles.header} ${styles.active}` : styles.header}>
                <Link to="/">
                    <img src={Logotipo} alt="Logotipo"/>
                </Link>

                <span onClick={() => setIsHeaderOpen(!isHeaderOpen)}>
                    <HiOutlineBars3BottomRight/>
                </span>
            </header>

            <div
                className={isHeaderOpen ? `${styles.backdrop} ${styles.active}` : styles.backdrop}
                onClick={() => setIsHeaderOpen(false)}
            >
            </div>

            <div className={styles.blur}></div>
        </>
    )
}