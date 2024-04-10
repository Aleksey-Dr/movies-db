import { useContext } from 'react';

import { AuthContext, anonymousUser } from '../../AuthContext';

import { Button, Typography } from '@mui/material';

interface AuthSectionProps {
    onLogin(): void;
    onLogout(): void;
};

function AuthSection({ onLogin, onLogout }: AuthSectionProps) {
    const auth = useContext(AuthContext);
    const loggedIn = auth.user !== anonymousUser;

    return loggedIn ? (
        <>
            <Typography>Hello, {auth.user.name}!</Typography>
            <Button variant="outlined" color="inherit" sx={{ ml: 1.5 }} onClick={onLogout}>
                Log out
            </Button>
        </>
    ) : (
        <Button variant="outlined" color="inherit" onClick={onLogin}>
            Log in
        </Button>
    );
}
export default AuthSection;
