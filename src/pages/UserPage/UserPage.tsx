import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from 'constants/AppRoute';
import { IUserVerboseFront } from 'types/user.types';

import { PostRaw } from 'components/PostRaw';
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

const MOCK_POST = {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
};

export const UserPage: React.FC = () => {
    const { userId } = useParams() as { userId: string };
    const navigate = useNavigate();

    const handlePostClick = useCallback(
        (postId: string) => {
            navigate(AppRoute.Post(userId, postId));
        },
        [navigate, userId],
    );

    return (
        <>
            <div>{`User ${userId} Page`}</div>
            <UserVerbose user={MOCK_USER} />
            <PostRaw post={MOCK_POST} handleClick={handlePostClick} />
        </>
    );
};
