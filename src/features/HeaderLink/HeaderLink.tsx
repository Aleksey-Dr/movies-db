import { ReactNode } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { Link } from '@mui/material';

interface IHeaderLink {
    to: string;
    children: ReactNode;
}

function HeaderLink({ children, to }: IHeaderLink) {
    return (
        <Link
            component={RouterNavLink}
            to={to}
            variant="button"
            color="inherit"
            sx={{ my: 1, mx: 1.5 }}
        >
            {children}
        </Link>
    );
}

export default HeaderLink;
