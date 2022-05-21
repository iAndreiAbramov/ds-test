import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@bem-react/classname';
import { AppRoute } from 'constants/AppRoute';

import { Button } from 'components/Button';
import { PostRaw } from 'components/PostRaw';

import { IPostsListProps } from './PostsList.types';

import './PostsList.scss';

const CnPostsList = cn('postsList');

export const PostsList: React.FC<IPostsListProps> = ({ posts, userId, isWithButton = false }) => {
    const navigate = useNavigate();

    const handlePostClick = useCallback(
        (postId: string) => {
            navigate(AppRoute.Post(userId, postId));
        },
        [navigate, userId],
    );

    const handleButtonClick = useCallback(() => {
        navigate(AppRoute.Posts(userId));
    }, [navigate, userId]);

    return (
        <section className={CnPostsList()}>
            <h2 className={CnPostsList('title')}>Posts</h2>
            <div className={CnPostsList('listWrapper')}>
                {posts.map((post) => (
                    <PostRaw post={post} key={post.id} handleClick={handlePostClick} />
                ))}
            </div>
            {isWithButton && <Button handleClick={handleButtonClick}>More posts</Button>}
        </section>
    );
};
