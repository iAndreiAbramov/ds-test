import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { resetUsersState } from 'store/reducers/users-reducer';
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
        () =>
            usersFetchStatus !== FetchStatus.Initial &&
            usersFetchStatus !== FetchStatus.Error &&
            usersFetchStatus !== FetchStatus.Done,
        [usersFetchStatus],
    );

    useEffect(() => {
        void dispatch(requestUsersThunkAction());
        return () => {
            void dispatch(resetUsersState());
        };
    }, [dispatch]);

    return (
        <>
            {isFetchingComplete ? (
                <UsersList users={users} errorMessage={usersError} />
            ) : (
                <LoaderDelayed
                    dependencies={[isUsersDataFetching]}
                    handleContentIsReady={setIsFetchingComplete}
                />
            )}
        </>
    );
};
