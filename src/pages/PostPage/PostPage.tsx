import React from 'react';
import { useParams } from 'react-router-dom';

export const PostPage: React.FC = () => {
    const { userId, postId } = useParams() as { userId: string; postId: string };

    return <div>{`User ${userId} post ${postId} page`}</div>;
};
