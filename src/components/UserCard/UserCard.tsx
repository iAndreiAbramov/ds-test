import { AppRoute } from 'constants/AppRoute';

import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import { Button } from 'components/Button';

import { IUserCardProps } from './UserCard.types';

import './UserCard.scss';

const CnUserCard = cn('userCard');

export const UserCard: React.FC<IUserCardProps> = ({ name, surname, userId }) => {
    const navigate = useNavigate();

    const handleButtonClick = useCallback(() => {
        navigate(AppRoute.User(userId));
    }, [navigate, userId]);

    return (
        <article className={CnUserCard()}>
            <h2 className={CnUserCard('title')}>{`${name} ${surname}`}</h2>
            <Button handleClick={handleButtonClick}>Смотреть профиль</Button>
        </article>
    );
};
