import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    selectUsers,
    selectUsersError,
    selectUsersFetchStatus,
} from 'store/selectors/users-selectors';
import { useAppDispatch } from 'store/store';
import { requestUsersThunkAction } from 'store/thunk-actions/users-thunk-actions';
import { FetchStatus } from 'types/api.types';

import { LoaderDelayed } from 'components/LoaderDelayed';
import { UsersList } from 'components/UsersList';

export const UsersPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const users = useSelector(selectUsers);
    const usersFetchStatus = useSelector(selectUsersFetchStatus);
    const usersError = useSelector(selectUsersError);
    const [isFetchingComplete, setIsFetchingComplete] = useState(false);

    const isUsersDataFetching = useMemo(
        () => usersFetchStatus === FetchStatus.Fetching,
        [usersFetchStatus],
    );

    useEffect(() => {
        if (usersFetchStatus === FetchStatus.Initial) {
            void dispatch(requestUsersThunkAction());
        }
    }, [dispatch, usersFetchStatus]);

    return (
        <>
            {isFetchingComplete ? (
                <UsersList users={users} />
            ) : (
                <LoaderDelayed
                    dependencies={[isUsersDataFetching]}
                    handleContentIsReady={setIsFetchingComplete}
                />
            )}
            {usersFetchStatus === FetchStatus.Error && <div>{usersError}</div>}
        </>
    );
};
