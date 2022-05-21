import React from 'react';
import { MOCK_USERS } from 'mocks/mocks';

import { UsersList } from 'components/UsersList';

export const UsersPage: React.FC = () => {
    return <UsersList users={MOCK_USERS} />;
};
