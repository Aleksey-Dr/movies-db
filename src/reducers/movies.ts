import { Action, Reducer } from 'redux';

export interface IResults {
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

export interface Movie {
    page?: number;
    results: IResults;
    total_pages?: number;
    total_results?: number;
}

interface MovieState {
    top: Movie[];
}

const initialState: MovieState = {
    top: [
        {
            results: {
                id: 1,
                title: 'Inception',
                popularity: 98,
                overview: 'Dreams...',
                release_date: '2010',
            },
        },
        {
            results: {
                id: 2,
                title: 'The Godfather',
                popularity: 97,
                overview: 'Godfather...',
                release_date: '1972',
            },
        },
        {
            results: {
                id: 3,
                title: 'The Dark Knight',
                popularity: 96.5,
                overview: 'Batman...',
                release_date: '2008',
            },
        },
        {
            results: {
                id: 4,
                title: 'The Godfather Part II',
                popularity: 96,
                overview: 'Part II...',
                release_date: '1974',
            },
        },
    ],
};

const moviesReducer: Reducer<MovieState, Action> = (state, action) => {
    return initialState;
};

export default moviesReducer;
