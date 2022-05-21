import React from 'react';
import { useParams } from 'react-router-dom';
import { IUserVerboseFront } from 'types/user.types';

import { UserVerbose } from 'components/UserVerbose';

const MOCK_USER: IUserVerboseFront = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        bs: 'harness real-time e-markets',
    },
};
export const UserPage: React.FC = () => {
    const { userId } = useParams() as { userId: string };
    return (
        <>
            <div>{`User ${userId} Page`}</div>
            <UserVerbose user={MOCK_USER} />
        </>
    );
};
