import React from 'react';
import { useParams } from 'react-router-dom';

export const PostsPage: React.FC = () => {
    const { userId } = useParams() as { userId: string };

    return <div>{`User ${userId} posts page`}</div>;
};
