import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { AppRoute } from 'constants/AppRoute';

import './NotFound.scss';

const CnNotFound = cn('notFound');

export const NotFound: React.FC = () => {
    return (
        <div className={CnNotFound()}>
            <div className={CnNotFound('digit')}>404</div>
            <div className={CnNotFound('text')}>Page not found</div>
            <Link className={CnNotFound('link')} to={AppRoute.Users()}>
                Return to main page
            </Link>
        </div>
    );
};
