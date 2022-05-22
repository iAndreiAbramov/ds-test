import { createSlice } from '@reduxjs/toolkit';
import {
    postCommentThunkAction,
    requestCommentsThunkAction,
} from 'store/thunk-actions/comments-thunk-actions';
import { FetchStatus } from 'types/api.types';
import { IComment } from 'types/comment.types';

export interface ICommentsState {
    error?: string;
    fetchStatus: FetchStatus;
    comments: IComment[];
    postError?: string;
    postFetchStatus: FetchStatus;
}

const initialState: ICommentsState = {
    error: undefined,
    fetchStatus: FetchStatus.Initial,
    comments: [] as IComment[],
    postError: undefined,
    postFetchStatus: FetchStatus.Initial,
};

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(requestCommentsThunkAction.pending, (state) => {
                state.fetchStatus = FetchStatus.Fetching;
                state.error = undefined;
                state.comments = [];
            })
            .addCase(requestCommentsThunkAction.fulfilled, (state, { payload }) => {
                state.fetchStatus = FetchStatus.Done;
                state.comments = payload;
            })
            .addCase(requestCommentsThunkAction.rejected, (state, { error }) => {
                state.fetchStatus = FetchStatus.Error;
                state.error = error.message;
                state.comments = [];
            })
            .addCase(postCommentThunkAction.pending, (state) => {
                state.postFetchStatus = FetchStatus.Fetching;
                state.postError = undefined;
            })
            .addCase(postCommentThunkAction.fulfilled, (state, { payload }) => {
                state.postFetchStatus = FetchStatus.Done;
                state.comments.push(payload);
            })
            .addCase(postCommentThunkAction.rejected, (state, { error }) => {
                state.postFetchStatus = FetchStatus.Error;
                state.postError = error.message;
                state.comments = [];
            });
    },
});

export const commentsReducer = commentsSlice.reducer;
