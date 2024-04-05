import { Link } from "react-router-dom";

import './MovieCard.css';

interface MovieCardProps {
    id: number;
    title: string;
    overview: string;
    popularity: number;
}

function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
    return (
        <div className='Movies-card'>
            <Link to={`/movies/${id}`}>{title}</Link>
            <p className='Movies-card-overview'>{overview}</p>
            <p className='Movies-card-popularity'>{popularity}</p>
        </div>
    );
};

export default MovieCard;