import { Link } from "react-router-dom";

import './MovieCard.css';

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

// hw_1
interface MovieCardProps {
    page?: number;
    results: IResults;
    total_pages?: number;
    total_results?: number;
};
// hw_1

function MovieCard({ results }: MovieCardProps) {
    const { id, title, overview, popularity, release_date } = results;
    return (
        <div className='Movies-card'>
            <Link to={`/movies/${id}`}>{title}</Link>
            <p className='Movies-card-release'>Year: {release_date}</p>
            <p className='Movies-card-overview'>{overview}</p>
            <p className='Movies-card-popularity'>{popularity}</p>
        </div>
    );
};

export default MovieCard;