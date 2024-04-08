import { Link } from 'react-router-dom';

import css from './MovieCard.module.scss';

interface IResults {
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

interface MovieCardProps {
    page?: number;
    results: IResults;
    total_pages?: number;
    total_results?: number;
};

function MovieCard({ results }: MovieCardProps) {
    const { id, title, overview, popularity, release_date } = results;

    return (
        <div className={css.card}>
            <img src="/movie-thumb.png" alt="Movie thumbnail" className={css.thumbnail} />
            <div className={css.content}>
                <Link to={`/movies/${id}`}>{title}</Link>
                <p className={css['release-date']}>Year: {release_date}</p>
                <p className={css.overview}>{overview}</p>
                <p className={css.popularity}>{popularity}</p>
            </div>
        </div>
    );
}

export default MovieCard;
