import { createSlice } from '@reduxjs/toolkit';
import { requestUserThunkAction } from 'store/thunk-actions/users-thunk-actions';
import { FetchStatus } from 'types/api.types';
import { IUserVerboseFront } from 'types/user.types';

export interface IUserState {
    error?: string;
    fetchStatus: FetchStatus;
    user: IUserVerboseFront;
}

const initialState: IUserState = {
    error: undefined,
    fetchStatus: FetchStatus.Initial,
    user: {} as IUserVerboseFront,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetState: (state) => {
            state.error = undefined;
            state.fetchStatus = FetchStatus.Initial;
            state.user = {} as IUserVerboseFront;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestUserThunkAction.pending, (state) => {
                state.fetchStatus = FetchStatus.Fetching;
                state.error = undefined;
                state.user = {} as IUserVerboseFront;
            })
            .addCase(requestUserThunkAction.fulfilled, (state, { payload }) => {
                state.fetchStatus = FetchStatus.Done;
                state.user = payload;
            })
            .addCase(requestUserThunkAction.rejected, (state, { error }) => {
                state.fetchStatus = FetchStatus.Error;
                state.error = error.message;
                state.user = {} as IUserVerboseFront;
            });
    },
});

export const { resetState: resetUserState } = userSlice.actions;
export const userReducer = userSlice.reducer;
