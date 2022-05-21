import React from 'react';

import { UserRaw } from 'components/UserRaw';

const MOCK_USER = {
    name: 'Ivan',
    userId: '1',
};

export const UsersPage: React.FC = () => {
    return (
        <>
            <div>Users page</div>
            <UserRaw name={MOCK_USER.name} userId={MOCK_USER.userId} />
        </>
    );
};
