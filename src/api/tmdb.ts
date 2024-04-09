import configuration from "configuration";

async function get<TBody>(relativeUrl: string): Promise<TBody> {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
            `Bearer ${configuration.apiToken}`,
        },
    };

    const response = await fetch(`https://api.themoviedb.org/3${relativeUrl}`, options);
    const json: TBody = await response.json();

    return json;
};

export interface MovieDetails {
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
};

interface PageResponse<TResults> {
    page: number;
    results: TResults[];
};

interface Configuration {
    images: {
        base_url: string;
    };
};

export const client = {
    async getConfiguration() {
        return get<Configuration>('/configuration');
    },

    async getNowPlaying(): Promise<MovieDetails[]> {
        const response = await get<PageResponse<MovieDetails>>('/movie/now_playing?page=1');
        
        return response.results;
    },
};