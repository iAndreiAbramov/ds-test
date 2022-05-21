import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { MOCK_POSTS } from 'mocks/mocks';
import { resetUserState } from 'store/reducers/user-reducer';
import { selectUser } from 'store/selectors/user-selectors';
import { selectUsersFetchStatus } from 'store/selectors/users-selectors';
import { useAppDispatch } from 'store/store';
import { requestUserThunkAction } from 'store/thunk-actions/users-thunk-actions';
import { FetchStatus } from 'types/api.types';

import { LoaderDelayed } from 'components/LoaderDelayed';
import { PostsList } from 'components/PostsList';
import { UserVerbose } from 'components/UserVerbose';

export const UserPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const userData = useSelector(selectUser);
    const userFetchStatus = useSelector(selectUsersFetchStatus);
    const { userId } = useParams() as { userId: string };
    const [isFetchingComplete, setIsFetchingComplete] = useState(false);

    const isUserDataFetching = useMemo(
        () =>
            userFetchStatus !== FetchStatus.Initial &&
            userFetchStatus !== FetchStatus.Error &&
            userFetchStatus !== FetchStatus.Done,
        [userFetchStatus],
    );

    useEffect(() => {
        void dispatch(requestUserThunkAction(userId));
        return () => {
            void dispatch(resetUserState());
        };
    }, [dispatch, userId]);

    return (
        <>
            {isFetchingComplete ? (
                <>
                    <UserVerbose user={userData} />
                    <PostsList posts={MOCK_POSTS} userId={userId} isWithButton />
                </>
            ) : (
                <LoaderDelayed
                    dependencies={[isUserDataFetching]}
                    handleContentIsReady={setIsFetchingComplete}
                />
            )}
        </>
    );
};
