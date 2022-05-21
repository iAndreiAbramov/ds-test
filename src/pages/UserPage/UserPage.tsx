import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { resetUserState } from 'store/reducers/user-reducer';
import { selectPostsFetchStatus, selectPostsPreview } from 'store/selectors/posts-selectors';
import { selectUser } from 'store/selectors/user-selectors';
import { selectUsersFetchStatus } from 'store/selectors/users-selectors';
import { useAppDispatch } from 'store/store';
import { requestPostsThunkAction } from 'store/thunk-actions/posts-thunk-actions';
import { requestUserThunkAction } from 'store/thunk-actions/users-thunk-actions';
import { FetchStatus } from 'types/api.types';

import { LoaderDelayed } from 'components/LoaderDelayed';
import { PostsList } from 'components/PostsList';
import { UserVerbose } from 'components/UserVerbose';

export const UserPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const userData = useSelector(selectUser);
    const userFetchStatus = useSelector(selectUsersFetchStatus);
    const postsPreview = useSelector(selectPostsPreview);
    const postsFetchStatus = useSelector(selectPostsFetchStatus);
    const { userId } = useParams() as { userId: string };
    const [isFetchingComplete, setIsFetchingComplete] = useState(false);

    const isUserDataFetching = useMemo(
        () =>
            userFetchStatus !== FetchStatus.Initial &&
            userFetchStatus !== FetchStatus.Error &&
            userFetchStatus !== FetchStatus.Done,
        [userFetchStatus],
    );

    const isPostsDataFetching = useMemo(
        () =>
            postsFetchStatus !== FetchStatus.Initial &&
            postsFetchStatus !== FetchStatus.Error &&
            postsFetchStatus !== FetchStatus.Done,
        [postsFetchStatus],
    );

    useEffect(() => {
        void dispatch(requestUserThunkAction(userId));
        return () => {
            void dispatch(resetUserState());
        };
    }, [dispatch, userId]);

    useEffect(() => {
        void dispatch(requestPostsThunkAction(userId));
    }, [dispatch, userId]);

    return (
        <>
            {isFetchingComplete ? (
                <>
                    <UserVerbose user={userData} />
                    <PostsList posts={postsPreview} userId={userId} isWithButton />
                </>
            ) : (
                <LoaderDelayed
                    dependencies={[isUserDataFetching, isPostsDataFetching]}
                    handleContentIsReady={setIsFetchingComplete}
                />
            )}
        </>
    );
};
