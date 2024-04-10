import { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../MovieCard';

import { Movie, fetchMovies } from '../../reducers/movies';
import { RootState } from '../../store';
import { useAppDispatch } from '../../hooks';
import { AuthContext, anonymousUser } from '../../AuthContext';

import { Container, Grid, LinearProgress, Typography } from '@mui/material';

interface MoviesProps {
    movies: Movie[];
    loading: boolean;
}

function Movies({ movies, loading }: MoviesProps) {
    const dispatch = useAppDispatch();

    const { user } = useContext(AuthContext);
    const loggedIn = user !== anonymousUser;

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    return (
        <Container sx={{ py: 4 }} maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Now playing
            </Typography>
            {loading ? (
                <LinearProgress color="secondary" />
            ) : (
                <Grid container spacing={4}>
                    {movies.map(movie => (
                        <Grid item key={movie.id} xs={12} sm={6} md={4}>
                            <MovieCard
                                id={movie.id}
                                title={movie.title}
                                overview={movie.overview}
                                popularity={movie.popularity}
                                backdrop_path={movie.backdrop_path}
                                enableUserActions={loggedIn}
                            />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
};

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
    loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
