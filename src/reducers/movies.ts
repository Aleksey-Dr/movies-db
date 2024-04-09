import { AppThunk } from 'store';
import { ActionWithPayload, createReducer } from '../redux/utils';
import { client } from 'api/tmdb';

export interface Movie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id: number;
    original_language?: string;
    original_title?: string;
    overview: string;
    popularity: number;
    poster_path?: string;
    release_date?: string;
    title: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

interface MovieState {
    top: Movie[];
    loading: boolean;
}

const initialState: MovieState = {
    top: [],
    loading: false,
};

const moviesLoaded = (movies: Movie[]) => ({
    type: 'movies/loaded',
    payload: movies,
});

const moviesLoading = () => ({
    type: 'movies/loading',
});

export function fetchMovies(): AppThunk<Promise<void>> {
    return async (dispatch, getState) => {
        dispatch(moviesLoading());

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

        dispatch(moviesLoaded(mappedResults)); 
    };
};

const moviesReducer = createReducer<MovieState>(initialState, {
    'movies/loaded': (state, action: ActionWithPayload<Movie[]>) => {
        return {
            ...state,
            top: action.payload,
            loading: false,
        };
    },
    'movies/loading': (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },
});

export default moviesReducer;
