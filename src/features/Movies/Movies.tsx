import { useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import MovieCard from '../MovieCard';

import { Movie, fetchNextPage } from '../../reducers/movies';
import { RootState } from '../../store';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useIntersectionObserver } from 'hooks/useIntersectionObserver';
import { AuthContext, anonymousUser } from '../../AuthContext';

import { Container, Grid, LinearProgress, Typography } from '@mui/material';

interface MoviesProps {
    movies: Movie[];
    loading: boolean;
};

function Movies({ movies, loading }: MoviesProps) {
    const dispatch = useAppDispatch();

    const { user } = useContext(AuthContext);
    const loggedIn = user !== anonymousUser;
    const hasMorePages = useAppSelector((state) => state.movies.hasMorePages);

    const [targetRef, entry] = useIntersectionObserver()

    useEffect(() => {

        if (entry?.isIntersecting && hasMorePages) {
            dispatch(fetchNextPage());
        };

    }, [dispatch, entry?.isIntersecting, hasMorePages]);

    return (
        <Container sx={{ py: 4 }} maxWidth="lg">
            <Typography variant="h4" align="center" gutterBottom>
                Now playing
            </Typography>
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
                <div ref={targetRef}>
                    {loading && <LinearProgress color="secondary" sx={{ mt: 3 }} />}
                </div>
        </Container>
    );
};

const mapStateToProps = (state: RootState) => ({
    movies: state.movies.top,
    loading: state.movies.loading,
});

const connector = connect(mapStateToProps);

export default connector(Movies);
