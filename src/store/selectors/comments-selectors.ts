import { createSelector } from '@reduxjs/toolkit';
import { ICommentsState } from 'store/reducers/comments-reducer';
import { RootStateType } from 'store/store';

const getCommentsState = (state: RootStateType): ICommentsState => state.comments;

export const selectComments = createSelector([getCommentsState], (state) => state.comments);
export const selectCommentsFetchStatus = createSelector(
    [getCommentsState],
    (state) => state.fetchStatus,
);
export const selectCommentsError = createSelector([getCommentsState], (state) => state.error);
export const selectCommentPostFetchStatus = createSelector(
    [getCommentsState],
    (state) => state.postFetchStatus,
);
