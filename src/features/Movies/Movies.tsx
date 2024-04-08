import { connect } from 'react-redux';

import MovieCard from '../MovieCard';

import { Movie } from '../../reducers/movies';
import { RootState } from '../../store';

import css from './Movies.module.scss';

interface MoviesProps {
    movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
    return (
        <div>
            <ul className={css['movies-list']}>
                {movies.map(movie => (
                    <li key={movie.results.id}>
                        <MovieCard results={movie.results} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
