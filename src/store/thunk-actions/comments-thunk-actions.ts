import { createAsyncThunk } from '@reduxjs/toolkit';
import { requestComments } from 'api/services/comments-service';

export const requestCommentsThunkAction = createAsyncThunk(
    'comments/request',
    async (postId: string) => requestComments(postId),
);
