import React from 'react';

import { UserCard } from 'components/UserCard';

const MOCK_USER = {
    name: 'Ivan',
    userId: '1',
};

export const UsersPage: React.FC = () => {
    return (
        <>
            <div>Users page</div>
            <UserCard name={MOCK_USER.name} userId={MOCK_USER.userId} />
        </>
    );
};
