import { api } from 'api/api';
import { AxiosResponse } from 'axios';
import { ApiRoute } from 'constants/ApiRoute';
import { IComment } from 'types/comment.types';
import { ICommentFormValues } from 'types/comment-form.types';

export const requestComments = async (postId: string): Promise<IComment[]> =>
    api
        .get<Promise<IComment[]>>(ApiRoute.Comments(postId))
        .then((response) => response?.data)
        .catch(() => {
            throw new Error('Unknown server error, please try later');
        });

export const postComment = async (postId: string, values: ICommentFormValues): Promise<IComment> =>
    api
        .post<Promise<IComment>, AxiosResponse<Promise<IComment>>, ICommentFormValues>(
            ApiRoute.Comments(postId),
            values,
        )
        .then((response) => response?.data)
        .catch(() => {
            throw new Error('Unknown server error, please try later');
        });
