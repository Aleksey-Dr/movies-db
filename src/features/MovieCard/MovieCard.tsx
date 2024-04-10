import { Link as RouterLink } from 'react-router-dom';

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    IconButton,
    Tooltip,
    Typography,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

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

    enableUserActions?: boolean;
};

function MovieCard({
    id,
    title,
    overview,
    popularity,
    enableUserActions,
    backdrop_path = '/movie-thumb.png',
}: MovieCardProps) {
    return (
        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component={'img'} image={backdrop_path} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                    {overview}
                </Typography>
                <Typography variant="button" gutterBottom>
                    {popularity}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    component={RouterLink}
                    to={`/movies/${id}`}
                    color="secondary"
                >
                    Details
                </Button>
                {enableUserActions &&
                    <Tooltip title="Add to favorites">
                        <IconButton>
                            <FavoriteIcon />
                        </IconButton>
                    </Tooltip>
                }
            </CardActions>
        </Card>
    );
}

export default MovieCard;
