import { createSelector } from '@reduxjs/toolkit';
import { POSTS_PREVIEW_NUMBER } from 'constants/common';
import { IPostsState } from 'store/reducers/posts-reducer';
import { RootStateType } from 'store/store';

const getPostsState = (state: RootStateType): IPostsState => state.posts;

export const selectPosts = createSelector([getPostsState], (state) => state.posts);
export const selectPostsFetchStatus = createSelector([getPostsState], (state) => state.fetchStatus);
export const selectPostsError = createSelector([getPostsState], (state) => state.error);
export const selectPostsPreview = createSelector([getPostsState], (state) => {
    if (state.posts.length > POSTS_PREVIEW_NUMBER) {
        return state.posts.slice(0, POSTS_PREVIEW_NUMBER);
    }

    return state.posts;
});
