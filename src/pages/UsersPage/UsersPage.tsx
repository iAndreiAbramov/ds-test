import React from 'react';

import { UserCard } from 'components/UserCard';

export const UsersPage: React.FC = () => {
    return (
        <>
            <div>Users page</div>
            <UserCard name="Иван" surname="Иванов" userId="1" />
        </>
    );
};
