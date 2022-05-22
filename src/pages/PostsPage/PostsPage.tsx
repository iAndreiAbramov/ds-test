import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
    selectPosts,
    selectPostsError,
    selectPostsFetchStatus,
} from 'store/selectors/posts-selectors';
import { useAppDispatch } from 'store/store';
import { requestPostsThunkAction } from 'store/thunk-actions/posts-thunk-actions';
import { FetchStatus } from 'types/api.types';

import { LoaderDelayed } from 'components/LoaderDelayed';
import { PostsList } from 'components/PostsList';

export const PostsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const posts = useSelector(selectPosts);
    const postsFetchStatus = useSelector(selectPostsFetchStatus);
    const postsError = useSelector(selectPostsError);
    const { userId } = useParams() as { userId: string };
    const [isFetchingComplete, setIsFetchingComplete] = useState(
        postsFetchStatus === FetchStatus.Done,
    );

    const isPostsDataFetching = useMemo(
        () =>
            postsFetchStatus !== FetchStatus.Initial &&
            postsFetchStatus !== FetchStatus.Error &&
            postsFetchStatus !== FetchStatus.Done,
        [postsFetchStatus],
    );

    useEffect(() => {
        if (postsFetchStatus === FetchStatus.Initial) {
            void dispatch(requestPostsThunkAction(userId));
        }
    }, [dispatch, userId, postsFetchStatus]);

    return (
        <>
            {isFetchingComplete ? (
                <PostsList posts={posts} userId={userId} errorMessage={postsError} />
            ) : (
                <LoaderDelayed
                    dependencies={[isPostsDataFetching]}
                    handleContentIsReady={setIsFetchingComplete}
                />
            )}
        </>
    );
};
