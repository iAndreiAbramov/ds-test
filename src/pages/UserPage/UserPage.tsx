import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_POSTS, MOCK_USER } from 'mocks/mocks';

import { PostsList } from 'components/PostsList';
import { UserVerbose } from 'components/UserVerbose';

export const UserPage: React.FC = () => {
    const { userId } = useParams() as { userId: string };

    return (
        <>
            <UserVerbose user={MOCK_USER} />
            <PostsList posts={MOCK_POSTS} userId={userId} isWithButton />
        </>
    );
};
