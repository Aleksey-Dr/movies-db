import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './App.module.scss';

function App() {
    return (
        <div className={css.root}>
            <header className={css.header}>
                <img src='/cinema-ico.png' className={css.logo} alt="logo" />
                <nav>
                    <ul className={css['nav-list']}>
                        <li>
                            <NavLink className={css.link} to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink className={css.link} to="/movies">Movies</NavLink>
                        </li>
                        <li>
                            <NavLink className={css.link} to="/about">About</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className={css.main}>
                <section className={css.section}>
                    <div className={css.container}>
                        <Outlet />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default App;
