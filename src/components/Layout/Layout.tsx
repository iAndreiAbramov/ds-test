import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AppRoute } from 'constants/AppRoute';

import './Layout.scss';

export const Layout: React.FC = () => {
    return (
        <>
            <header className="pageHeader">
                <div className="container">
                    <Link to={AppRoute.Users()}>
                        <h1 className="pageHeader-title">Fake Club</h1>
                    </Link>
                </div>
            </header>
            <div className="container pageContent">
                <Outlet />
            </div>
        </>
    );
};
