import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../MovieCard';

import { Movie } from '../../reducers/movies';
import { RootState } from '../../store';

import { client, MovieDetails } from '../../api/tmdb';

import css from './Movies.module.scss';

export function MoviesFetch() {
    const [movies, setMovies] = useState<MovieDetails[]>([]);

    useEffect(() => {
        async function loadData() {
            const config = await client.getConfiguration();
            const imageUrl = config.images.base_url;
            
            const results = await client.getNowPlaying();

            const mappedResults: Movie[] = results.map(movie => ({
                id: movie.id,
                overview: movie.overview,
                title: movie.title,
                popularity: movie.popularity,
                backdrop_path: movie.backdrop_path
                    ? `${imageUrl}w780${movie.backdrop_path}`
                    : undefined,
            }));

            setMovies(mappedResults);
        };

        loadData();
    }, []);

    return <Movies movies={movies} />;
}

interface MoviesProps {
    movies: Movie[];
};

function Movies({ movies }: MoviesProps) {
    return (
        <div>
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
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
