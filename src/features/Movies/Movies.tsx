import { connect } from 'react-redux';

import MovieCard from '../MovieCard';

import { Movie } from '../../reducers/movies';
import { RootState } from '../../store';

import './Movies.css';

interface MoviesProps {
    movies: Movie[];
}

function Movies({ movies }: MoviesProps) {
    return (
        <div>
            <ul className='Movies'>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            popularity={movie.popularity}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
