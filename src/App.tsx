import { Outlet } from 'react-router-dom';
import HeaderLink from 'features/HeaderLink';

import {
    AppBar,
    CssBaseline,
    ThemeProvider,
    Toolbar,
    Typography,
    createTheme,
} from '@mui/material';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';
import { teal } from '@mui/material/colors';

const defaultTheme = createTheme({
    palette: {
        primary: teal,
        secondary: {
            main: '#96000f',
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <AppBar>
                <Toolbar>
                    <LiveTvOutlinedIcon sx={{ mr: 2 }} />
                    <Typography variant="h6" color="inherit" sx={{ mr: 4}} noWrap>
                        The Movies DB
                    </Typography>
                    <nav>
                        <HeaderLink to="/">Home</HeaderLink>
                        <HeaderLink to="/movies">Movies</HeaderLink>
                        <HeaderLink to="/about">About</HeaderLink>
                    </nav>
                </Toolbar>
            </AppBar>
            <main>
                <Outlet />
            </main>
        </ThemeProvider>
    );
}

export default App;
