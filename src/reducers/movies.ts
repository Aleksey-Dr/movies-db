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
    page: number;
    hasMorePages: boolean;
}

const initialState: MovieState = {
    top: [],
    loading: false,
    page: 0,
    hasMorePages: true,
};

const moviesLoaded = (
    movies: Movie[],
    page: number,
    hasMorePages: boolean,
) => ({
    type: 'movies/loaded',
    payload: { movies, page, hasMorePages },
});

const moviesLoading = () => ({
    type: 'movies/loading',
});

export function fetchNextPage(): AppThunk<Promise<void>> {
    return async (dispatch, getState) => {
        const nextPage = getState().movies.page + 1;
        dispatch(fetchPage(nextPage));
    };

    function fetchPage(page: number): AppThunk<Promise<void>> {
        return async dispatch => {
            dispatch(moviesLoading());

            const config = await client.getConfiguration();
            const imageUrl = config.images.base_url;

            const nowPlaying = await client.getNowPlaying(page);

            const mappedResults: Movie[] = nowPlaying.results.map(movie => ({
                id: movie.id,
                overview: movie.overview,
                title: movie.title,
                popularity: movie.popularity,
                backdrop_path: movie.backdrop_path
                    ? `${imageUrl}w780${movie.backdrop_path}`
                    : undefined,
            }));

            const hasMorePages = nowPlaying.page < nowPlaying.totalPages;

            dispatch(moviesLoaded(mappedResults, page, hasMorePages));
        };
    }
}

const moviesReducer = createReducer<MovieState>(initialState, {
    'movies/loaded': (
        state,
        action: ActionWithPayload<{
            movies: Movie[];
            page: number;
            hasMorePages: boolean;
        }>,
    ) => {
        return {
            ...state,
            top: [...state.top, ...action.payload.movies],
            page: action.payload.page,
            hasMorePages: action.payload.hasMorePages,
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
