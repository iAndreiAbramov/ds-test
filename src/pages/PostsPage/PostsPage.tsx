import React from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_POSTS } from 'mocks/mocks';

import { PostsList } from 'components/PostsList';

export const PostsPage: React.FC = () => {
    const { userId } = useParams() as { userId: string };

    return <PostsList posts={MOCK_POSTS} userId={userId} />;
};
