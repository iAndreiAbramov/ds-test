import { createSlice } from '@reduxjs/toolkit';
import { requestUsersThunkAction } from 'store/thunk-actions/users-thunk-actions';
import { FetchStatus } from 'types/api.types';
import { IUserRawFront } from 'types/user.types';

export interface IUsersState {
    error?: string;
    fetchStatus: FetchStatus;
    users: IUserRawFront[];
}

const initialState: IUsersState = {
    error: undefined,
    fetchStatus: FetchStatus.Initial,
    users: [] as IUserRawFront[],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestUsersThunkAction.pending, (state) => {
                state.fetchStatus = FetchStatus.Fetching;
                state.error = undefined;
                state.users = [];
            })
            .addCase(requestUsersThunkAction.fulfilled, (state, { payload }) => {
                state.fetchStatus = FetchStatus.Done;
                state.error = undefined;
                state.users = payload;
            })
            .addCase(requestUsersThunkAction.rejected, (state, { error }) => {
                state.fetchStatus = FetchStatus.Error;
                state.error = JSON.stringify(error);
                state.users = [];
            });
    },
});

export const usersReducer = usersSlice.reducer;
