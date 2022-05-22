import { createAsyncThunk } from '@reduxjs/toolkit';
import { postComment, requestComments } from 'api/services/comments-service';
import { ICommentFormValues } from 'types/comment-form.types';

export const requestCommentsThunkAction = createAsyncThunk(
    'comments/request',
    async (postId: string) => requestComments(postId),
);

export const postCommentThunkAction = createAsyncThunk(
    'comments/post',
    async ({ postId, values }: { postId: string; values: ICommentFormValues }) =>
        postComment(postId, values),
);
