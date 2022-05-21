import React from 'react';

import { UsersList } from 'components/UsersList';

const MOCK_USER = {
    name: 'Ivan Ivanov',
    userId: '1',
};

const MOCK_USERS = [MOCK_USER, MOCK_USER, MOCK_USER];

export const UsersPage: React.FC = () => {
    return (
        <>
            <div>Users page</div>
            <UsersList users={MOCK_USERS} />
        </>
    );
};
