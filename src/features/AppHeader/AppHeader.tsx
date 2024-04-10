import HeaderLink from 'features/HeaderLink';
import AuthSection from 'features/AuthSection';

import {
    AppBar,
    Box,
    Toolbar,
    Typography,
} from '@mui/material';
import LiveTvOutlinedIcon from '@mui/icons-material/LiveTvOutlined';

interface AppHeaderProps {
    onLogin(): void;
    onLogout(): void;
};

function AppHeader({ onLogin, onLogout }: AppHeaderProps) {
    return (
        <AppBar position='static'>
            <Toolbar>
                <LiveTvOutlinedIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" sx={{ mr: 2 }} noWrap>
                    The Movies DB
                </Typography>
                <Box sx={{ flexGrow: 1 }}>
                    <nav>
                        <HeaderLink to="/">Home</HeaderLink>
                        <HeaderLink to="/movies">Movies</HeaderLink>
                        <HeaderLink to="/about">About</HeaderLink>
                    </nav>
                </Box>
                <AuthSection onLogin={onLogin} onLogout={onLogout} />
            </Toolbar>
        </AppBar>
    );
};

export default AppHeader;