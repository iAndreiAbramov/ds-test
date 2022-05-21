import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestPosts } from 'api/services/posts-service';

export const requestPostsThunkAction = createAsyncThunk('posts/request', async (userId: string) =>
    requestPosts(userId),
);
