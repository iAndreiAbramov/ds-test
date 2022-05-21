import React from 'react';
import { useParams } from 'react-router-dom';

import { PostVerbose } from 'components/PostVerbose';

const MOCK_POST = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

export const PostPage: React.FC = () => {
    const { userId, postId } = useParams() as { userId: string; postId: string };

    return (
        <>
            <div>{`User ${userId} post ${postId} page`}</div>
            <PostVerbose post={MOCK_POST} />
        </>
    );
};
