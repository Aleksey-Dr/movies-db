import { Link, useParams } from 'react-router-dom';
import { MdArrowBackIos } from "react-icons/md";

import css from './MoviePage.module.scss';

type MovieParams = {
    id: string;
};

function MoviePage() {
    const { id } = useParams<MovieParams>();

    return (
        <>
            <span>
                <Link to='/movies' className={css['link-to-back']}>
                    <MdArrowBackIos />
                    <span>Go to movies</span>
                </Link>
            </span>
            <h2 className={css.title}>Title of movie</h2>
            <p>Original language</p>
            <p>Overview</p>
            <p>Popularity</p>
            <p>Release date</p>
            <p>Vote average</p>
            <p>Vote count</p>
            <p>ID: {id}</p>
        </>
    );
};

export default MoviePage;