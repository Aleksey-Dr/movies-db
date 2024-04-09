import { Link } from 'react-router-dom';

import { PiThumbsUp } from 'react-icons/pi';
import {
    CardHeader,
    CardDescription,
    CardContent,
    Card,
    Image,
} from 'semantic-ui-react';

import css from './MovieCard.module.scss';

interface MovieCardProps {
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

function MovieCard({
    id,
    title,
    overview,
    popularity,
    backdrop_path = '/movie-thumb.png',
}: MovieCardProps) {
    return (
        <Card className={css.card}>
            <Image
                src={backdrop_path}
                ui={false}
                className={css.thumbnail}
            />
            <CardContent className={css.content}>
                <CardHeader>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </CardHeader>
                <CardDescription className={css.overview}>
                    {overview}
                </CardDescription>
            </CardContent>
            <CardContent extra className={css.content}>
                <CardDescription className={css.popularity}>
                    <PiThumbsUp className={css.icon} />
                    <span>{popularity}</span>
                </CardDescription>
            </CardContent>
        </Card>
    );
}

export default MovieCard;
