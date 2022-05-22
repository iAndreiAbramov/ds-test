import { createSlice } from '@reduxjs/toolkit';
import { requestPostsThunkAction } from 'store/thunk-actions/posts-thunk-actions';
import { FetchStatus } from 'types/api.types';
import { IPost } from 'types/post.types';

export interface IPostsState {
    error?: string;
    fetchStatus: FetchStatus;
    posts: IPost[];
}

const initialState: IPostsState = {
    error: undefined,
    fetchStatus: FetchStatus.Initial,
    posts: [] as IPost[],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestPostsThunkAction.pending, (state) => {
                state.fetchStatus = FetchStatus.Fetching;
                state.error = undefined;
                state.posts = [];
            })
            .addCase(requestPostsThunkAction.fulfilled, (state, { payload }) => {
                state.fetchStatus = FetchStatus.Done;
                state.posts = payload;
            })
            .addCase(requestPostsThunkAction.rejected, (state, { error }) => {
                state.fetchStatus = FetchStatus.Error;
                state.error = error.message;
                state.posts = [];
            });
    },
});

export const postsReducer = postsSlice.reducer;
