import { useEffect } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../MovieCard';

import { Movie, fetchMovies, } from '../../reducers/movies';
import { RootState } from '../../store';
import { useAppDispatch } from '../../hooks';

import css from './Movies.module.scss';

interface MoviesProps {
    movies: Movie[];
    loading: boolean;
};

function Movies({ movies, loading }: MoviesProps) {
    const dispatch = useAppDispatch();

    useEffect(() => {
       dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <div>
            {loading ? <h3>Loading...</h3> :
                <ul className={css['movies-list']}>
                    {movies.map(movie => {
                        return (
                            <li key={movie.id}>
                                <MovieCard
                                    id={movie.id}
                                    title={movie.title}
                                    overview={movie.overview}
                                    popularity={movie.popularity}
                                    backdrop_path={movie.backdrop_path}
                                />
                            </li>
                        );
                    })}
                </ul>
            }
        </div>
    );
};

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
    loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
