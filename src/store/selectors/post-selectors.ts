import { createSelector } from '@reduxjs/toolkit';
import { IPostState } from 'store/reducers/post-reducer';
import { RootStateType } from 'store/store';

const getPostState = (state: RootStateType): IPostState => state.post;

export const selectPost = createSelector([getPostState], (state) => state.post);
export const selectPostFetchStatus = createSelector([getPostState], (state) => state.fetchStatus);
export const selectPostError = createSelector([getPostState], (state) => state.error);
