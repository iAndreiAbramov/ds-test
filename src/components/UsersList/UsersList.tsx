import React from 'react';
import { cn } from '@bem-react/classname';

import { UserRaw } from 'components/UserRaw';

import { IUsersListProps } from './UsersList.types';

import './UsersList.scss';

const CnUsersList = cn('usersList');

export const UsersList: React.FC<IUsersListProps> = ({ users }) => {
    return (
        <section className={CnUsersList()}>
            <h2 className={CnUsersList('title')}>Users List</h2>
            <div className={CnUsersList('listWrapper')}>
                {users.map(({ userId, name }) => (
                    <UserRaw userId={userId} name={name} key={userId} />
                ))}
            </div>
        </section>
    );
};
