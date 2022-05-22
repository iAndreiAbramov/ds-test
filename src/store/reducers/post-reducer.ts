import { createSlice } from '@reduxjs/toolkit';
import { requestPostThunkAction } from 'store/thunk-actions/posts-thunk-actions';
import { FetchStatus } from 'types/api.types';
import { IPost } from 'types/post.types';

export interface IPostState {
    error?: string;
    fetchStatus: FetchStatus;
    post: IPost;
}

const initialState: IPostState = {
    error: undefined,
    fetchStatus: FetchStatus.Initial,
    post: {} as IPost,
};

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestPostThunkAction.pending, (state) => {
                state.fetchStatus = FetchStatus.Fetching;
                state.error = undefined;
                state.post = {} as IPost;
            })
            .addCase(requestPostThunkAction.fulfilled, (state, { payload }) => {
                state.fetchStatus = FetchStatus.Done;
                state.post = payload;
            })
            .addCase(requestPostThunkAction.rejected, (state, { error }) => {
                state.fetchStatus = FetchStatus.Error;
                state.error = error.message;
                state.post = {} as IPost;
            });
    },
});

export const postReducer = postSlice.reducer;
