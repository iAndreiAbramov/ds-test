import React from 'react';
import { useParams } from 'react-router-dom';

import { Comment } from 'components/Comment';
import { PostVerbose } from 'components/PostVerbose';

const MOCK_POST = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

const MOCK_COMMENT = {
    postId: 1,
    id: 1,
    name: 'id labore ex et quam laborum',
    email: 'Eliseo@gardner.biz',
    body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
};

export const PostPage: React.FC = () => {
    const { userId, postId } = useParams() as { userId: string; postId: string };

    return (
        <>
            <div>{`User ${userId} post ${postId} page`}</div>
            <PostVerbose post={MOCK_POST} />
            <Comment comment={MOCK_COMMENT} />
        </>
    );
};
