import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestPost, requestPosts } from 'api/services/posts-service';

export const requestPostsThunkAction = createAsyncThunk('posts/request', async (userId: string) =>
    requestPosts(userId),
);

export const requestPostThunkAction = createAsyncThunk('post/request', async (postId: string) =>
    requestPost(postId),
);
